import { Box, Heading, Text } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'
import Blobanimation from '../assets/images/headerBackground.jpg'
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ScreenHeader = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_600SemiBold
    });
    if (!fontsLoaded) {
        return null
    }
    else {
        return (
            <Box style={styles.container}>
                <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
                </ImageBackground>
                <Heading style={styles.title}>{props.title}</Heading>
            </Box>
        )
    }
}

export default ScreenHeader;
const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: '100%',
        position: 'relative',
        marginLeft: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        overflow: 'hidden'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
    },
    title: {
        fontFamily: 'Montserrat_800ExtraBold',
        color: 'white',
        height: '100%',
        padding: 10,
        fontSize: 20
    }
});