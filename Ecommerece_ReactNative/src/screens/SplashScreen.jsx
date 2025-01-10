import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Logo from '../assets/images/logo.png';
import Hello from '../assets/images/logoNew.png';
// import Video from 'react-native-video';
// import LogoVideo from '../assets/images/introVideo.mp4';
import { Box, Center, Heading, Text, Image, Progress } from 'native-base';
import { useFonts, Montserrat_800ExtraBold, Montserrat_900Black, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';


function SplashScreen({ showOnboardingScreen }) {
    const [progressBarValue, setprogressBarValue] = useState(0);
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_600SemiBold
    });
    useEffect(() => {
        if (progressBarValue != 100) {
            interval = setInterval(() => {
                setprogressBarValue((prev) => prev + 1);
            }, 1);
        } else {
            showOnboardingScreen();
        }
    }, [progressBarValue]);


    return (
        <Center style={styles.container}>
            <Box>
                <Center>
                    <Image source={Hello} style={styles.helloImg} alt="Alternate Text" size="2xl" />
                </Center>
            </Box>
            <Box>
                <Center>
                    <Image source={Logo} size="xl" alt="Alternate Text" />
                    <Heading color="white" textAlign="center" size="2xl" mb="2" mt="5">
                        GADGET WORLD
                    </Heading>
                    <Text color="white" fontSize="lg">Your Tech Search Ends Here...</Text>
                </Center>
            </Box>
            <Box w="100%" style={{ marginTop: 10 }} maxW="300">
                <Progress value={progressBarValue} mx="4" _filledTrack={{ bg: "#2e8de1" }} />
            </Box>
        </Center>
    )
}
export default SplashScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000'
    },
    logo: {
        width: 200,
        height: 160
    },
    helloImg: {
        resizeMode: 'contain',
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat_800ExtraBold',
        color: '#fff',
    },
});