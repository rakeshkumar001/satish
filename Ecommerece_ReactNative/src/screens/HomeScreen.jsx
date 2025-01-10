import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Box, Button, HStack, ScrollView, Text } from 'native-base';
import Carousel from '../components/Carousel';
import { OFFERS } from '../data';
import OfferCarousel from '../components/OfferCarousel';
import ProductCarousel from '../components/ProductCarousel';
import { TOP_PICKS, HOT_SALES } from '../data/index'
import { useRoute } from '@react-navigation/native';
import ScreenTitle from '../components/ScreenTittle';

const HomeScreen = ({ props }) => {
  const route = useRoute();

  const [categorySelected, setCategorySelected] = useState(0);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.sectionContainer}>
        <Box mt={1}>
          <OfferCarousel list={OFFERS} />
        </Box>
        <Box mt={1}>
          <ScreenTitle mainTitle={"Choose"} secondTitle={"Categories"} showSeeAll={true} />
        </Box>
        <Box style={styles.categories}>
          <Carousel selected={categorySelected} selectCategory={(val) => setCategorySelected(val)} />
        </Box>
        <Box mt={1}>
          <ScreenTitle mainTitle={"Hot"} secondTitle={"Sales"} showSeeAll={false} showCountdown={true} />
        </Box>
        <Box mt={1}>
          <ProductCarousel cardData={HOT_SALES} />
        </Box>
        <Box mt={1}>
          <ScreenTitle mainTitle={"Top"} secondTitle={"Picks"} showSeeAll={true} />
        </Box>
        <Box mt={1}>
          <ProductCarousel cardData={TOP_PICKS} />
        </Box>
      </View >
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 14,
    height: '100%',
    paddingVertical: 20
  },
  categories: {
    height: 60,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
