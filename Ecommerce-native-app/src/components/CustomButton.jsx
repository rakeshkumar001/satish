import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 

export default function CustomButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.Pressable} onPress={onPress}>
      <LinearGradient style={styles.button} colors={['#b65eba', '#2e8de1']}  >
        <Text style={styles.text}>{title} <AntDesign style={styles.icon} name="doubleright" size={20} color="white" /></Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20,
    borderRadius: 50,
    elevation: 3,
    height:50
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent:'space-evenly'
  },
  icon:{
    marginHorizontal:20,
  }
});