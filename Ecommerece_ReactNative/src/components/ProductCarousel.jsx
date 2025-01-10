import React from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { imageHeight, imageWidth, cardPadding, cardPerSlide } from '../constants/CarouselConfig';
import ProductCard from './ProductCard';
const { width: screenWidth } = Dimensions.get('window')


const ProductCarousel = (props) => {
    const { cardData } = props
    const CarouselSlide = (props) => {
        const { cards } = props
        return (
            <View style={styles.slide}>
                {cards.map((card) => {
                    return <ProductCard data={card} key={card.id} />
                })}
            </View>
        )
    }
    const noOfSlides = Math.ceil(cardData.length / cardPerSlide);
    return (
        <View>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollViewContainerStyle}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToAlignment={'center'}
            >
                {[...Array(noOfSlides)].map((e, i) => {
                    const startIndex = i + 1
                    const startPosition = ((startIndex + (startIndex - 1)) - 1)
                    const endPosition = (startIndex * 2)
                    return <CarouselSlide key={cardData[i].id} cards={cardData.slice(startPosition, endPosition)} />
                })}

            </ScrollView>
        </View >
    );
}
export default ProductCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    scrollViewContainerStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth,
        paddingHorizontal: cardPadding
    },
    imageCard: {
        width: imageWidth,
        height: imageHeight
    }
});
