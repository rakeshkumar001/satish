import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GradientText = (props) => {
    return (
        <View>
            <Text style={styles.OBtitle} >{props.text}</Text>
        </View>
    );
};

export default GradientText;
const styles = StyleSheet.create({
    OBtitle: {
        color: '#2e8de1',
        fontSize: 30,
        fontFamily: 'Montserrat_900Black',
    },
})