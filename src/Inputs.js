import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';


const Inputs = () => {
    const [myinput,setMyinput] = useState('');
    const [names,setNames] = useState(['Nightcrawler','Psylocke'])

    const onChangeInput = (event) => {
        setMyinput(event);
    }

    const onAddUser = () => {
        const newState = [...names, myinput];
        setNames(newState);
        setMyinput('');
    }

    return(
        <>
            <TextInput
                style={styles.input}
                value={myinput}
                onChangeText={(e)=> onChangeInput(e) }
                //multiline={true}
                //maxLength={5}
            // editable={false}
                //keyboardType="number-pad"
            />
            <Button
                style={styles.mybutton}
                title="Add User"
                onPress={onAddUser}
            />
            <View>
                {names.map(name=>(
                    <Text 
                        style={styles.user}
                        key={name}
                    >
                        {name}
                    </Text>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        marginTop:20,
        marginBottom: 20,
        padding:10,
        fontSize:20
    },
    mybutton: {
        marginTop: 20,
        marginBottom: 20,
        //padding: 10
    },
    user:{
        textAlign: 'center',
        fontSize:20,
        //borderWidth:1,
        //borderColor:'#cecece',
        padding:1,
        marginTop: 10,
        marginBottom:1,
        alignContent: 'center'
    }
});

export default Inputs;