import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

const Inputs = () => {

    const [myInput, setMyInput] = useState('');

    const onChangeInput = (event) => {
        //alert(event);
        setMyInput(event);
    }

    return(
        <TextInput
            style={styles.input}
            value={myInput}
            onChange={(e) => onChangeInput(e)}
            //multiline={true}
            //maxLength={5}
            //editable={false}
            keyboardType='number-pad'
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f2f2f2',
        fontSize: 40,
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        width: '100%'
    },
});

export default Inputs;