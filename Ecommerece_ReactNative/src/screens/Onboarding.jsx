import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';
import SplashScreen from './SplashScreen';
import { useFonts, Montserrat_800ExtraBold, Montserrat_900Black, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Blobanimation from '../assets/images/splashBackground.png'
import CustomButton from '../components/CustomButton';
import { Box, Heading, Text, Center, Container } from 'native-base';
import GradientText from '../components/GradientText';
import { BlurView } from 'expo-blur';

function OnboardingScreen({ showSplashScreenBool, showSplashScreen }) {
    // const [splashScreen, setSplashScreen] = useState(true)
    const slides = [
        {
            key: 's1',
            title: 'EASY SHOPPING',
            text: 'We provide high quality products just for you, within few clicks.',
            image: require('../assets/images/easyShopping.png'),
        },
        {
            key: 's2',
            title: 'SECURE PAYMENT',
            text: 'Your payment security is our prime concern, be calm and enjoy our multiple level security for transaction. ',
            image: require('../assets/images/securePayment.png'),
        },
        {
            key: 's3',
            title: 'QUICK DELIVERY 24x7',
            text: "Let us fullfill your tech needs within hours, with our 24x7 quick delivery system. ",
            image: require('../assets/images/fastDelivery.png'),
        },
    ];
    const RenderItem = ({ item }) => {
        return (
            <Center style={{ height: '100%' }}>
                <Center>
                    <Box style={{ flex: 1 }}>
                    </Box>
                    <Image source={item.image} style={styles.featureImage} alt="Alternate Text" />
                    <BlurView intensity={100} tint="default" style={{ flex: 2, borderTopLeftRadius: 100, borderTopEndRadius: 100, paddingTop: 50, paddingHorizontal: 50 }}>
                        <Heading style={styles.OBtitle} color="white" textAlign="center" size="2xl" mb="2" mt="5" bold>
                            <GradientText style={styles.OBtitle} text={item.title} />
                        </Heading>
                        <Text style={styles.OBpara} color="white" fontSize="lg">  {item.text}</Text>
                    </BlurView>
                </Center>
            </Center>
        );
    };
    const onDone = () => {
        showRealApp(true);
        splashScreen(false)
    };
    const onSkip = () => {
        showRealApp(true);
    };
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_600SemiBold
    });
    const renderNextButton = () => {
        return (
            <CustomButton title="Next" onPress={() => { return null }} />
        );
    };
    const renderDoneButton = () => {
        return (
            <CustomButton title="Lets Get Started !" onPress={() => showRealApp()} />
        );
    };
    if (!fontsLoaded) {
        return null;
    } else {
        return (
            showSplashScreenBool ?
                <SplashScreen showOnboardingScreen={() => showSplashScreen(false)} />
                :
                (
                    <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
                        <AppIntroSlider
                            data={slides}
                            renderItem={RenderItem}
                            onDone={onDone}
                            onSkip={onSkip}
                            renderDoneButton={renderDoneButton}
                            renderNextButton={renderNextButton}
                            bottomButton
                        />
                    </ImageBackground>
                )
        )
    }
}

export default OnboardingScreen;


const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
    },
    OBtitle: {
        color: '#2e8de1',
        fontSize: 30,
        fontFamily: 'Montserrat_900Black',
    },
    OBpara: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#777',
        textAlign: 'center'
    },
    featureImage: {
        marginBottom: 50,
        flex: 3,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
})