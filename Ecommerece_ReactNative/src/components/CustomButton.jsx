import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Box, Button, Center, Icon } from 'native-base';
import { useFonts, Montserrat_800ExtraBold, Montserrat_900Black, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

export default function CustomButton(props) {
  const { onPress, title } = props;
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_600SemiBold
  });
  if (!fontsLoaded) {
    return null
  }
  else {
    return (
      <Box alignItems="center" style={{ marginTop: 20 }}>
        <LinearGradient colors={["#12151a", '#0c0c0d', '#f08024']} style={styles.button} >
          <Button size="lg" onPress={() => onPress()} style={{ backgroundColor: 'transparent', fontSize: 40, display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.buttonText}>
              {title}
            </Text>
            <Center style={styles.iconContainer}>
              <Icon as={FontAwesome5} name="arrow-right" size={4} color="white" style={styles.icon} />
            </Center>
          </Button>
        </LinearGradient>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 5,
    height: 50,
    fontSize: 25,
    paddingRight: 50
  },
  text: {
    fontSize: 25,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'space-evenly',
    fontFamily: 'Montserrat_600SemiBold'
  },
  iconContainer: {
    position: 'absolute',
    right: -55,
    top: -12,
    height: 40,
    width: 40,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  icon: {
    color: '#2e8de1',
  },
  buttonText: {
    fontWeight: 800,
    color: '#fff',
    fontSize: 18
  }
});