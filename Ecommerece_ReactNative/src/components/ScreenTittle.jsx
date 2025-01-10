import { Box, Center, HStack, Icon, IconButton } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, BungeeOutline_400Regular } from '@expo-google-fonts/bungee-outline';
import { Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Oswald_600SemiBold, Oswald_700Bold, } from '@expo-google-fonts/oswald';
import { LondrinaOutline_400Regular } from '@expo-google-fonts/londrina-outline';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../constants/theme';

const ScreenTitle = ({ mainTitle, secondTitle, showSeeAll = false, showCountdown = false }) => {
  let [fontsLoaded] = useFonts({
    BungeeOutline_400Regular,
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Oswald_600SemiBold,
    Oswald_700Bold,
    LondrinaOutline_400Regular
  });
  if (!fontsLoaded) {
    return null
  }
  else {
    return (
      <View style={styles.container} >
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="3" alignItems="center">
            <Text style={styles.sectionTitle}>{mainTitle}</Text>
            <Text style={styles.sectionTitleMain}>{secondTitle}</Text>
          </HStack>
          {
            showSeeAll ?
              <HStack alignItems="center">
                <Text style={styles.seeAll}>See All</Text>
                <IconButton icon={<Icon as={Entypo} name="chevron-small-right" size="6" color="white" />} />
              </HStack>
              :
              null
          }
          {
            showCountdown ?
              <HStack alignItems="center" space={2} mt="2">
                <Text style={{ color: colors.light }}>Closing in :</Text>
                <Text style={styles.countdown}>01</Text>
                <Text style={{ color: colors.light }}>:</Text>
                <Text style={styles.countdown}>20</Text>
                <Text style={{ color: colors.light }}>:</Text>
                <Text style={styles.countdown}>54</Text>
              </HStack>
              :
              null
          }
        </HStack>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  sectionTitle: {
    fontSize: 25,
    lineHeight: 30,
    color: '#f08024',
    fontWeight: '600',
    fontFamily: 'Montserrat_800ExtraBold',
  },
  sectionTitleMain: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Montserrat_800ExtraBold',
  },
  seeAll: {
    color: '#fff'
  },
  countdown: {
    backgroundColor: colors.light,
    color: colors.primary,
    paddingHorizontal: 4,
    borderRadius: 4,
    fontFamily: 'Oswald_700Bold',
  }
});

export default ScreenTitle;