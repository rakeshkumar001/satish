import React from 'react';
import { LAPTOPS } from '../data/index'
// import ProductCard from '../components/ProductCard';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import { Box, Center, Divider, Icon, Image, Input, ScrollView, Text, View, VStack } from 'native-base';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
import { MasonryFlashList } from "@shopify/flash-list";
import { MaterialIcons } from '@expo/vector-icons'
import ScreenTitle from '../components/ScreenTittle';
import { colors } from '../constants/theme';
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Blobanimation from '../assets/images/headerBackground.jpg'
import ProductCard from '../components/ProductCard';

const CategoryList = () => {
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
                <ScrollView>
                    <Box >
                        <MasonryFlashList
                            data={LAPTOPS}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <Box style={{ margin: 10 }}>
                                    <ProductCard data={item} key={item.id} masonary={true} />
                                </Box>
                            }
                            estimatedItemSize={202}
                        />
                    </Box>
                </ScrollView>
            </View>
        )
    }
}
export default CategoryList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: screenHeight + 200,
        width: screenWidth,
    },
});