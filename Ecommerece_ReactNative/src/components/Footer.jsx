import { Center, HStack, Icon, Pressable, View, Text, Box } from 'native-base';
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants/theme';
import { ImageBackground, StyleSheet, } from 'react-native';
import Blobanimation from '../assets/images/headerBackground.jpg'
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
// import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const [selected, setSelected] = React.useState(0);
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_600SemiBold
    });
    if (!fontsLoaded) {
        return null
    }
    else {
        return (
            <View >
                <HStack style={styles.footerWrapper} bg={colors.primary} safeAreaBottom alignItems="center" shadow={10}>
                    <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
                    </ImageBackground>
                    <Pressable style={styles.btnShadow} cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="1" flex={1} onPress={() => { setSelected(0), navigation.navigate('Home') }}>
                        <Center style={selected === 0 ? styles.selected : null}>
                            {/* <HStack alignItems="center"> */}
                            <Icon as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} style={selected === 0 ? styles.selectedIcon : styles.notSelectedIcon} size="7" />
                            {/* <Text color="white" fontSize="10" style={selected === 0 ? styles.footerText : styles.displayNone}>
                                    Home
                                </Text>
                            </HStack> */}
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => { setSelected(1), navigation.navigate('Categories') }}>
                        <Center style={selected === 1 ? styles.selected : null}>
                            {/* <HStack alignItems="center"> */}
                            <Icon as={<MaterialIcons name="search" />} style={selected === 1 ? styles.selectedIcon : styles.notSelectedIcon} size="7" />
                            {/* <Text color="white" fontSize="10" style={selected === 1 ? styles.footerText : styles.displayNone}>
                                    Search
                                </Text>
                            </HStack> */}
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => { setSelected(2), navigation.navigate('Cart') }}>
                        <Center style={selected === 2 ? styles.selected : null}>
                            {/* <HStack alignItems="center"> */}
                            <Icon as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} style={selected === 2 ? styles.selectedIcon : styles.notSelectedIcon} size="7" />
                            {/* <Text color="white" fontSize="10" style={selected === 2 ? styles.footerText : styles.displayNone}>
                                    Cart
                                </Text>
                            </HStack> */}
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                        <Center style={selected === 3 ? styles.selected : null}>
                            {/* <HStack alignItems="center"> */}
                            <Icon as={<MaterialCommunityIcons name={selected === 3 ? 'truck-delivery' : 'truck-delivery-outline'} />} style={selected === 3 ? styles.selectedIcon : styles.notSelectedIcon} size="7" />
                            {/* <Text color="white" fontSize="10" style={selected === 3 ? styles.footerText : styles.displayNone}>
                                    Account
                                </Text>
                            </HStack> */}
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                        <Center style={selected === 3 ? styles.selected : null}>
                            {/* <HStack alignItems="center"> */}
                            <Icon as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} style={selected === 3 ? styles.selectedIcon : styles.notSelectedIcon} size="7" />
                            {/* <Text color="white" fontSize="10" style={selected === 3 ? styles.footerText : styles.displayNone}>
                                    Account
                                </Text>
                            </HStack> */}
                        </Center>
                    </Pressable>
                </HStack>
            </View >
        )
    }
}

export default Footer;
const styles = StyleSheet.create({
    footerWrapper: {
        height: 50,
        // borderRadius: 50,
        paddingHorizontal: 40,
        // overflow: 'hidden',
        // width: '90%',
        // alignSelf: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    footerText: {
        fontFamily: 'Montserrat_600SemiBold',
    },
    selected: {
        borderColor: '#000',
        borderRadius: 50,
        width: 60,
        height: 60,
        elevation: 3,
        backgroundColor: colors.primary,
        alignSelf: 'center',
        position: 'absolute',
        top: -50,
        borderWidth: 5,
        borderColor: colors.dark
    },
    selectedIcon: {
        color: '#fff',
    },
    notSelectedIcon: {
        color: 'white'
    },
    btnShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    displayNone: {
        display: 'none'
    }
})