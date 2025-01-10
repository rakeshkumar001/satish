import { Box, Center, FormControl, Heading, HStack, Input, Link, Image, Text, View, VStack, Icon } from 'native-base'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native';
import LoginBackground from '../assets/images/loginBackground.jpg'
import CustomButton from '../components/CustomButton';
import { BlurView } from 'expo-blur';
import Logo from '../assets/images/logo.png';
import { Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useFonts, Montserrat_800ExtraBold, Montserrat_900Black, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

const SignUpScreen = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_600SemiBold
    });
    return (
        <>
            <Box style={styles.logoContainer}>
                <Center>
                    <Image source={Logo} size="xl" alt="Alternate Text" />
                </Center>
            </Box>
            <Box safeArea p="2" py="8" w="100%" maxW="90%" >
                <Heading style={{ fontWeight: 800 }} size="2xl" fontWeight="bold" color="#fff" _dark={{
                    color: "warmGray.50"
                }}>
                    Register
                </Heading>
                <Heading mt="1" color="white" fontWeight="medium" size="lg">
                    Let's create an acount!
                </Heading>
            </Box>
            <BlurView intensity={40} tint="dark" style={styles.blurContainer}>
                <Box style={styles.form}>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <Icon as={MaterialCommunityIcons} name="email-outline" size={5} color="white" style={styles.icon} />
                            <Input style={styles.input} placeholder="Email id..." />
                        </FormControl>
                        <FormControl>
                            <Icon as={Feather} name="lock" size={4} color="white" style={styles.icon} />
                            <Input type="password" style={styles.input} placeholder="Password..." />
                        </FormControl>
                        <FormControl>
                            <Icon as={Feather} name="lock" size={4} color="white" style={styles.icon} />
                            <Input type="password" style={styles.input} placeholder="Confirm Password..." />
                        </FormControl>
                        <CustomButton title="Create Account" onPress={() => showHomeScreen()} />
                        <HStack mt="3" justifyContent="center">
                            <Text fontSize="lg" style={{ color: '#ccc', fontSize: 18, marginRight: 10 }}>
                                Already have an account?
                            </Text>
                            <Link _text={{
                                color: "white",
                                fontWeight: "medium",
                                fontSize: "lg"
                            }} onPress={() => props.toggleSignUpScreen()}>
                                Log In
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

    )
}

export default SignUpScreen;

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
        alignItems: "center"
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