import React from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { colors, shadow, sizes, spacing } from '../constants/theme';

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 150;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const OfferCarousel = ({ list }) => {
    return (
        <FlatList
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            showsHorizontalScrollIndicator={true}
            keyExtractor={i => i.id}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        style={{
                            marginLeft: spacing.l,
                            marginRight: index === list.length - 1 ? spacing.l : 0,
                        }}>
                        <View style={[styles.card, shadow.dark]}>
                            <View style={styles.imageBox}>
                                <Image source={item.image} style={styles.image} />
                            </View>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.title && item.title}</Text>
                                <Text style={styles.location}>{item.location && item.location}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#293144',
        borderRadius:10
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
    },
    title: {
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white,
    },
    location: {
        fontSize: sizes.h3,
        color: colors.white,
    },
});

export default OfferCarousel;