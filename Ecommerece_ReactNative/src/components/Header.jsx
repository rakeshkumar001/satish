import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'
import { Avatar, Box, Center, HStack, Icon, IconButton, Image, Input, Text, View, VStack } from 'native-base'
import React from 'react';
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Logo from '../assets/images/logo.png';
import { ImageBackground, StyleSheet } from 'react-native';
import Blobanimation from '../assets/images/headerBackground.jpg'

const Header = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Montserrat_600SemiBold
    });
    if (!fontsLoaded) {
        return null
    }
    else {
        return (
            <Box style={styles.wrapper}>
                <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
                </ImageBackground>
                <HStack py="1" justifyContent="space-between" alignItems="center" w="100%" alignSelf="center">
                    <HStack alignItems="center" flex={1}>
                        <Text style={{ width: 40 }}></Text>
                        {/* <IconButton icon={<Icon size="5" as={Ionicons} name="grid-outline" color="white" />} /> */}
                        <VStack>
                            <Text color="white" fontSize="15" fontWeight="bold">Hello,</Text>
                            <Text color="white" fontSize="20" style={{ fontFamily: 'Montserrat_800ExtraBold', top: -5 }}>User</Text>
                        </VStack>
                    </HStack>
                    <Center flex={1}>
                        <Image source={Logo} size="xs" alt="Alternate Text" />
                    </Center>
                    <HStack alignItems="center" flex={1}>
                        {/* <IconButton icon={<Icon as={Feather} name="heart" size="5" color="white" />} /> */}
                        <IconButton icon={<Icon as={Ionicons} name="notifications" size="5" color="white" />} />
                        <IconButton icon={<Icon as={Feather} name="shopping-cart" size="5" color="white" marginRight="2" />} />
                        <Avatar source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}
                            style={{ height: 35, width: 35, borderWidth: 1, borderColor: '#fff' }}>
                            US
                        </Avatar>
                    </HStack>
                </HStack>
                <Center>
                    <Box w="100%" space={2} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Box style={styles.input}>
                            <Input placeholder="Search your gadgets..." color='#ddd' bg="red" borderColor="transparent" alignSelf="center" borderRadius="50" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
                        </Box>
                    </Box>
                </Center>
            </Box>
        )
    }
}


export default Header;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#293144',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
        width: '100%',
        left:-16
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
    },
    input: {
        backgroundColor: '#373639',
        borderRadius: 40,
        padding: 0,
        width: '80%',
        marginBottom: 5
    }
});