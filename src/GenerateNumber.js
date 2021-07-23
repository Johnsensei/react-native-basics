import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GenerateNumber = (props) => (
    <View style={styles.generate}>
        <Text style={{color: 'white'}}>Generate Number</Text>
    </View>
)

const styles = StyleSheet.create({
    generate: {
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },
});

export default GenerateNumber;