import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const GenerateNumber = ({add}) => (
    <TouchableHighlight
        onPress={() => add()}
        underlayColor="yellow"
        activeOpacity={0.1}>
        <View style={styles.generate}>
            <Text style={{color: 'white'}}>Generate Number</Text>
        </View>
    </TouchableHighlight>
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