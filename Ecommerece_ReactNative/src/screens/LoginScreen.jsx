import { Box, Center, FormControl, Heading, HStack, Input, Link, Image, Text, View, VStack, Icon } from 'native-base'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native';
import LoginBackground from '../assets/images/screenBackground.png'
import CustomButton from '../components/CustomButton';
import { BlurView } from 'expo-blur';
import Logo from '../assets/images/logo.png';
import { FontAwesome, FontAwesome5, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import SignUpScreen from './SignUpScreen';
import { useFonts, Montserrat_800ExtraBold, Montserrat_900Black, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

const LoginScreen = (props) => {
    const [showSignUpScreen, setShowSignUpScreen] = useState(false);
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_600SemiBold
    });

    return (
        <ImageBackground blurRadius={4} source={LoginBackground}>
            <Center w="100%" style={styles.loginPage}>
                {
                    showSignUpScreen ?
                        <SignUpScreen toggleSignUpScreen={() => setShowSignUpScreen(false)} />
                        :
                        <>
                            <Box style={styles.logoContainer}>
                                <Center>
                                    <Image source={Logo} size="xl" alt="Alternate Text" />
                                </Center>
                            </Box>
                            <Box safeArea p="2" py="8" w="100%" maxW="90%" >
                                <Heading style={{ fontFamily: 'Montserrat_800ExtraBold', }} size="2xl" color="#fff" _dark={{
                                    color: "warmGray.50"
                                }}>
                                    Welcome Back
                                </Heading>
                                <Heading mt="1" _dark={{
                                    color: "warmGray.200"
                                }} color="white" fontWeight="medium" size="lg">
                                    Sign in to continue!
                                </Heading>
                            </Box>
                            <BlurView intensity={40} tint="dark" style={styles.blurContainer}>
                                <Box style={styles.form}>
                                    <VStack space={3} mt="5" style={styles.formBackground}>
                                        <FormControl>
                                            {/* <FormControl.Label><Text semibold color="white" fontSize="lg">Email ID</Text></FormControl.Label> */}
                                            <Icon as={MaterialCommunityIcons} name="email-outline" size={5} color="white" style={styles.icon} />
                                            <Input style={styles.input} placeholder="Email id..." />
                                        </FormControl>
                                        <FormControl>
                                            {/* <FormControl.Label><Text semibold color="white" fontSize="lg">Password</Text></FormControl.Label> */}
                                            <Icon as={Feather} name="lock" size={4} color="white" style={styles.icon} />
                                            <Input type="password" style={styles.input} placeholder="Password..." />
                                            <Link _text={{
                                                fontSize: "sm",
                                                fontWeight: "500",
                                                color: "white"
                                            }} alignSelf="flex-end" mt="1">
                                                Forget Password?
                                            </Link>
                                        </FormControl>
                                        <CustomButton title="SignIn" onPress={() => props.showHomeScreen()} />
                                        <HStack mt="3" justifyContent="center">
                                            <Text fontSize="lg" style={{ color: '#ccc', fontSize: 18, marginRight: 10 }}>
                                                Don't have an account?
                                            </Text>
                                            <Link _text={{
                                                color: "white",
                                                fontWeight: "medium",
                                                fontSize: "lg"
                                            }} onPress={() => setShowSignUpScreen(true)}>
                                                Sign Up
                                            </Link>
                                        </HStack>
                                        <View
                                            style={{
                                                marginTop: 10,
                                                marginBottom: 10,
                                                borderBottomColor: '#ccc',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                            }}
                                        />
                                        <Center>
                                            <Text style={styles.socialMedia}> Or create account using social media</Text>
                                            <HStack mt="3" justifyContent="center" space={3}>
                                                <FontAwesome name="google-plus-official" size={40} color="white" />
                                                <FontAwesome5 name="facebook" size={36} color="white" />
                                                <Entypo name="twitter-with-circle" size={40} color="white" />
                                            </HStack>
                                        </Center>
                                    </VStack>
                                </Box>
                            </BlurView>
                        </>
                }
            </Center>
        </ImageBackground>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    loginPage: {
        height: '100%'
    },
    socialMedia: {
        color: '#fff',
        fontSize: 18
    },
    container: {
        justifyContent: "center",
        alignItems: "center",

    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    blurContainer: {
        width: '85%',
        borderRadius: 10,
        padding: 20,
    },
    label: {
        color: '#fff',
        fontSize: 20
    },
    logoContainer: {
        marginBottom: -50
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 10
    },
    input: {
        color: '#ccc',
        fontSize: 18,
        paddingLeft: 40,
    }
})