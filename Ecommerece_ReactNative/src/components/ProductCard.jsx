import React from 'react'
import { Box, Heading, HStack, Icon, IconButton, Image, Text } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native'
import { imageHeight, imageWidth, cardPadding } from '../constants/CarouselConfig'
import { BlurView } from 'expo-blur';
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { colors } from '../constants/theme';
import { FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import { Oswald_600SemiBold, Oswald_700Bold, } from '@expo-google-fonts/oswald';

const ProductCard = (props) => {
    const { data } = props
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_600SemiBold,
        Oswald_600SemiBold,
        Oswald_700Bold,
    });
    if (!fontsLoaded) {
        return null
    }
    else {
        return (
            <Box style={styles.productContainer} mt={data.id == 1 ? "50" : "0"} >
                <Box style={styles.imageCard}>
                    <Image
                        source={{
                            uri: data.thumbnail
                        }}
                        alt="Alternate Text"
                        style={styles.image}
                    />
                </Box>
                <BlurView style={{ borderRadius: 50, position: 'absolute', top: 10, left: 10, overflow: 'hidden' }} intensity={100} tint="light">
                    {
                        data.price.discounted ?
                            <Text style={styles.discount}>{data.price.savings_percent} %</Text>
                            :
                            null
                    }
                </BlurView>
                <IconButton style={styles.like} icon={<Icon size="5" as={AntDesign} name="heart" color={'gray.400'} />} />
                <BlurView style={styles.content} intensity={120} tint="light">
                    <Box>
                        <Heading size="sm" style={styles.title}>{data.title}</Heading>
                        <HStack alignItems="center" style={{ marginTop: -5, marginLeft: -10 }}>
                            <IconButton mr="0" icon={<Icon size="3" as={FontAwesome5} name="star-half-alt" color={colors.primary} />} />
                            <Text style={styles.rating}>{data.reviews.rating}</Text>
                            <Text style={styles.review}>{data.reviews.total_reviews} reviews</Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text style={styles.price}>
                                <Box >
                                    <Text style={{ fontSize: 15 }}>
                                        $
                                    </Text>
                                </Box>
                                {data.price.current_price}
                                <Box>
                                    {
                                        data.price.before_price != 0 ?
                                            <Text style={styles.oldPrice}>{data.price.before_price}</Text>
                                            :
                                            null
                                    }
                                </Box>
                            </Text>
                            <IconButton style={styles.addToCart} icon={<Icon size="5" as={Entypo} name="plus" color={colors.light} />} />
                        </HStack>
                    </Box>
                </BlurView >
            </Box >
        )
    }
}

export default ProductCard

const styles = StyleSheet.create({
    productContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        height: 220,
        position: 'relative',
        elevation: 3,
        backgroundColor: '#000'
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'contain',
    },
    imageCard: {
        position: 'relative',
        top: -20,
        backgroundColor: '#fff',
    },
    content: {
        backgroundColor: colors.light,
        position: 'absolute',
        bottom: 0,
        width: '90%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignSelf: 'center',
        height: 80,
        padding: 10,
        overflow: 'hidden',
        elevation: 5
    },
    title: {
        fontFamily: 'Montserrat_800ExtraBold',
        height: 20,
        fontSize: 11,
        lineHeight: 20
    },
    discount: {
        fontSize: 12,
        paddingHorizontal: 5,
        fontFamily: 'Oswald_600SemiBold',
        borderWidth: 1.5,
        borderRadius: 50,
        borderColor: colors.primary
    },
    price: {
        fontFamily: 'Oswald_700Bold',
        fontSize: 18,
        color: colors.primary,
    },
    addToCart: {
        backgroundColor: colors.primary,
        position: 'absolute',
        right: -15,
        bottom: -5,
        borderTopLeftRadius: 10,
        elevation: 10
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        position: 'absolute',
        left: 5,
        bottom: -3,
        fontSize: 12,
        fontFamily: 'Oswald_600SemiBold',
        color: '#979797'
    },
    like: {
        position: 'absolute',
        top: 0,
        right: 10,
    },
    rating: {
        fontFamily: 'Oswald_600SemiBold',
        marginLeft: -5
    },
    review: {
        marginLeft: 10,
        borderRadius: 4,
        fontSize: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        lineHeight: 20
    }
});
