import { LinearGradient } from 'expo-linear-gradient';
import { Box, Button, Center, Container, Icon, IconButton, Pressable } from 'native-base';
import React from 'react'
import { View, FlatList, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colors, shadow, sizes, spacing } from '../constants/theme';
import Blobanimation from '../assets/images/ButtonBackground.jpg'


const { width } = Dimensions.get('window');
const previewCount = 4;
const itemWidth = width / (previewCount + .5);
// const startScroll = (itemWidth * 3 / 4);
const startScroll = (itemWidth * 0);

const Carousel = (props) => {
    const categoriesArray = [
        {
            data: <IconButton icon={<Icon as={MaterialIcons} name="laptop-mac" size="6" color="white" />} />,
            name: 'Laptop'
        },
        {
            data: <IconButton color='#fff' icon={<Icon as={Entypo} name="tablet-mobile-combo" size="6" color="white" />} />,
            name: 'Mobile'
        },
        {
            data: <IconButton icon={<Icon as={MaterialCommunityIcons} name="watch" size="6" color="white" />} />,
            name: 'Watch'
        },
        {
            data: <IconButton icon={<Icon as={Ionicons} name="ios-game-controller" size="6" color="white" />} />,
            name: 'Game'
        },
        {
            data: <IconButton icon={<Icon as={FontAwesome5} name="headphones" size="6" color="white" />} />,
            name: 'Headphone'
        },
        {
            data: <IconButton icon={<Icon as={Entypo} name="camera" size="6" color="white" />} />,
            name: 'Camera'
        },
    ]
    const { selectCategory } = props;
    const data = categoriesArray;
    const flatlistRef = React.useRef();
    React.useEffect(() => {
        if (flatlistRef.current) flatlistRef.current.scrollToOffset({
            offset: startScroll, animated: true
        });
    }, [flatlistRef]);
    const snapToOffsetsLikeGooglePlay = data.map((x, i) => {
        return ((i * itemWidth) + startScroll)
    })
    // const snapToOffsets = data.map((x, i) => {
    //     return ((i * (itemWidth) * previewCount) + startScroll)
    // })

    return (
        <Center>
            <FlatList
                ref={flatlistRef}
                style={styles.container}
                pagingEnabled={true}
                horizontal={true}
                decelerationRate={0}
                snapToOffsets={snapToOffsetsLikeGooglePlay}
                snapToAlignment={"center"}
                data={data}
                renderItem={({ item, index }) => (
                    <View style={styles.view}>
                        {
                            props.selected == index ?
                                <Box style={[styles.selected, { transform: [{ scale: 1.4 }] }]} >
                                    {/* <LinearGradient colors={[colors.dark, colors.primary]} style={styles.selected} > */}
                                    <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
                                    </ImageBackground>
                                    <Button size="lg" style={styles.IconButton} onPress={() => selectCategory(index)}>
                                    </Button>
                                    <Center>
                                        <Box style={{ transform: [{ scale: 1.2 }], marginTop: 10 }}>
                                            {item["data"]}
                                        </Box>
                                        {/* <Text style={[styles.text, { fontWeight: 800 }]}>{item["name"]}</Text> */}
                                    </Center>
                                    {/* </LinearGradient> */}
                                </Box>
                                :
                                <Box style={styles.notSelected}>
                                    <LinearGradient colors={[colors.dark, colors.secondary]} style={styles.notSelected}>
                                        <Button size="lg" style={styles.IconButton} onPress={() => selectCategory(index)}>
                                        </Button>
                                        <Center>
                                            {item["data"]}
                                            <Text style={styles.text}>{item["name"]}</Text>
                                        </Center>
                                    </LinearGradient>
                                </Box>
                        }
                    </View >
                )}
            />
        </Center>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    view: {
        width: itemWidth - 20, //20 is margin left and right
        marginHorizontal: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        position: 'absolute',
        bottom: -8
    },
    selected: {
        width: '100%',
        height: '100%',

    },
    notSelected: {
        width: '100%',
        height: '100%',
    },
    IconButton: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
    },
})