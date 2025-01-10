import { NativeBaseProvider, View, Box, Fab, Icon, Text, StatusBar, ScrollView, HStack, Center, VStack, Avatar, IconButton } from "native-base";
import OnboardingScreen from './src/screens/Onboarding';
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { theme } from "./theme";
import { Feather } from '@expo/vector-icons';
import Footer from "./src/components/Footer";
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from "./src/constants/theme";
import { useFonts, Montserrat_800ExtraBold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Oswald_600SemiBold, Oswald_700Bold, } from '@expo-google-fonts/oswald';
import Blobanimation from './src/assets/images/headerBackground.jpg'
import { NavigationContainer, DarkTheme, useNavigationContainerRef } from '@react-navigation/native';
import Routing from "./src/constants/Routing";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0f0f0f'
  },
};

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  const IconTemplate = (id) => {
    let icons = [
      <Icon style={{ width: 25, height: 25 }} as={MaterialCommunityIcons} name="truck-delivery" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={Ionicons} name="wallet" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={MaterialIcons} name="category" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={Ionicons} name="notifications" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={Entypo} name="share" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={MaterialIcons} name="help" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={Ionicons} name="ios-settings" size="5" color="white" />,
      <Icon style={{ width: 25, height: 25 }} as={MaterialCommunityIcons} name="logout" size="5" color="white" />,
    ]
    return icons[id]
  }
  const TabButton = (currentTab, id, title, iconData) => {
    return (
      <TouchableOpacity onPress={() => {
        if (title == "LogOut") {
          setIsLoggedIn(false)
          setShowLoginScreen(true)
          showSplashScreen(true)
        } else {
          setCurrentTab(id)
        }
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 3,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          borderRadius: 8,
          marginTop: 15
        }}>
          {IconTemplate(id)}
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white"
          }}>{title}</Text>

        </View>
      </TouchableOpacity>
    );
  }



  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Oswald_700Bold,
    Oswald_600SemiBold
  });
  if (!fontsLoaded) {
    return null
  }
  else {
    return (
      <NativeBaseProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <ImageBackground blurRadius={1} source={Blobanimation} style={styles.backgroundImage}>
          </ImageBackground>
          {/* MENU PAGE */}
          <View style={{ justifyContent: 'flex-start', padding: 15 }}>
            <Avatar source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}
              style={{ height: 100, width: 100, borderWidth: 3, marginTop: 50, borderColor: '#fff' }}>
              US
            </Avatar>
            <HStack space={2} mt={4}>
              <Text style={{
                fontSize: 30,
                color: 'white',
                lineHeight: 40,
                fontFamily: 'Oswald_600SemiBold'
              }}>Hello,</Text>
              <Text style={{
                fontSize: 30,
                color: 'white',
                lineHeight: 40,
                fontFamily: 'Oswald_700Bold'
              }}>User</Text>
            </HStack>
            <TouchableOpacity>
              <Text style={{
                marginTop: 10,
                color: 'white',
                fontSize: 20
              }}>View Profile</Text>
            </TouchableOpacity>

            <View style={{ flexGrow: 1, marginTop: 10 }}>
              {TabButton(currentTab, 0, "Orders")}
              {TabButton(currentTab, 1, "Wallet")}
              {TabButton(currentTab, 2, "Categories")}
              {TabButton(currentTab, 3, "Notifications")}
              {TabButton(currentTab, 4, "Share")}
              {TabButton(currentTab, 5, "Need Help?")}
              {TabButton(currentTab, 6, "Settings")}
            </View>

            <View>
              {TabButton(currentTab, 7, "LogOut")}
            </View>

          </View>
          {/* ANIMATION CODE TO OPEN CLOSE SCREEN MENU */}
          <Animated.View style={{
            flexGrow: 1,
            backgroundColor: colors.dark,
            position: 'absolute',
            elevation: 10,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: showMenu ? 15 : 0,
            overflow: 'hidden',
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue }
            ]
          }}>
            {showSplashScreen ? (
              <OnboardingScreen showSplashScreenBool={showSplashScreen} showSplashScreen={() => { setShowSplashScreen(false) }} />
            ) : (
              <>
                {
                  isLoggedIn ?
                    <View style={styles.sectionContainer}>
                      <NavigationContainer theme={MyTheme} ref={navigationRef}
                        onStateChange={async () => {
                          const currentRouteName = navigationRef.getCurrentRoute().name;
                          currentRouteName == "Home" ? setHideMenu(false) : setHideMenu(true);
                        }}
                      >
                        <Routing />
                        <Fab style={styles.fabIcon} renderInPortal={true} shadow={2} right={3} bottom={16} size="sm" icon={<Icon color="white" as={Feather} name="phone-call" size="4" />} />
                        <Footer />
                      </NavigationContainer>
                    </View>
                    :
                    showLoginScreen ? <LoginScreen showHomeScreen={() => setIsLoggedIn(true)} /> : <SignUpScreen />
                }
              </>
            )}

            <Animated.View style={{
              position: 'absolute',
              top: 0,
              transform: [{
                translateY: closeButtonOffset
              }]
            }}>
              <TouchableOpacity onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                setShowMenu(!showMenu);
              }}>
                {
                  hideMenu ?
                    null
                    :
                    <Box>
                      {
                        showMenu ?
                          < AntDesign name="close" size={20} style={{ position: 'relative', top: 40, left: 10, }} color={colors.light} />
                          :
                          <Ionicons name="grid-outline" size={20} style={{ position: 'relative', top: 10, marginTop: 5, marginLeft: 10 }} color={colors.light} />
                      }
                    </Box>
                }
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </SafeAreaView>
      </NativeBaseProvider >
    );
  }
}
export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#0f0f0f",
    height: screenHeight,
  },
  fabIcon: {
    borderColor: '#f08024',
    borderWidth: 2,
    backgroundColor: '#0f0f0f'

  },
  screenHeight: {
    height: screenHeight,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
});