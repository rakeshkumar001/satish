import React from 'react';
import { CATEGORY_OPTION } from '../data/index'
// import ProductCard from '../components/ProductCard';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import { Box, Center, Divider, Icon, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
import { MasonryFlashList } from "@shopify/flash-list";
import { MaterialIcons } from '@expo/vector-icons'
import ScreenTitle from '../components/ScreenTittle';
import { colors } from '../constants/theme';
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Blobanimation from '../assets/images/headerBackground.jpg'
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_600SemiBold
    });
    if (!fontsLoaded) {
        return null
    }
    else {
        return (
            <View style={styles.container}>
                <Box>
                    <Center>
                        <Box w="100%" space={2} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >
                            <Box style={styles.input}>
                                <Input placeholder="Search your gadgets..." color='#ddd' bg="red" borderColor="transparent" alignSelf="center" borderRadius="50" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
                            </Box>
                        </Box>
                    </Center>
                </Box>
                <Box>
                    <ScreenTitle mainTitle={"Choose"} secondTitle={"Categories"} showSeeAll={false} />
                </Box>
                <ScrollView>
                    <Box >
                        <MasonryFlashList
                            data={CATEGORY_OPTION}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <Pressable onPress={() => navigation.navigate('CategoryList')}>
                                    <Box style={styles.cat_card} key={item.id}>
                                        <Box style={styles.imageContainer}>
                                            <Image
                                                source={item.image}
                                                alt="Alternate Text"
                                                size="lg"
                                                style={styles.image}
                                            />
                                        </Box>
                                        <Box style={styles.titleContainer}>
                                            <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
                                            </ImageBackground>
                                            <Text alignItems="center" style={styles.cat_title}>
                                                {item.title}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Pressable>
                            }
                            estimatedItemSize={202}
                        />
                    </Box>
                </ScrollView>
            </View>
        )
    }
}
export default Categories;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: screenHeight + 200,
        width: screenWidth,
    },
    input: {
        marginVertical: 10,
        backgroundColor: '#373639',
        borderRadius: 40,
        padding: 0,
        width: '80%',
        marginBottom: 5
    },
    cat_card: {
        borderRadius: 10,
        height: 200,
        position: 'relative',
        margin: 10,
        overflow: 'hidden',
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        height: '40%',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        padding: 12,
        position: 'absolute',
        top: 70,
        zIndex: 10
    },
    image: {
        transform: [{ scale: 2.5 }],
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        height: 120,
        borderRadius: 20,
        borderTopEndRadius: 20,
        marginHorizontal: 10,
        overflow: 'hidden'
    },
    cat_title: {
        padding: 10,
        color: colors.light,
        fontSize: 20,
        fontFamily: 'Montserrat_800ExtraBold',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#000',
    },
});