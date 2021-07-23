import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Nav';
import GenerateNumber from './src/GenerateNumber';
import ListItems from './src/ListItems';

export default function App() {
  const [hello, setHello] = useState(true);
  const [random, setRandom] = useState([20, 55]);
    
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHello(false);
  //   }, 2000)
  // });

  const onAddRandom = () => {
    //alert("On add random.");
    const randomVal = Math.floor(Math.random() * 100 + 1);
    const newState = [...random, randomVal];
    setRandom(newState);
  }

  return (
    <View style={styles.container}>
      <Nav nameOfApp='My app'>Hello and Welcome</Nav>
      <View>
        <Text style={styles.headerText}>
          My name is John.
        </Text>
      </View>
      <View >
        <Text style={styles.lineText}>
          I am working on a React Native app.
        </Text>
      </View>
      { hello ?
        <Text>Hello was true</Text>
        : null }
      <View>
        <GenerateNumber add={() => onAddRandom()}/>
      </View>
      <View>
        <ListItems items={random}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headerText: {
    backgroundColor: 'blue',
    fontSize: 20,
    color: '#ffffff',
    width:'50%',
    alignItems: 'center',
    padding: 20
  },

  lineText: {
    backgroundColor: 'green',
    fontSize: 12,
    color: 'black',
    width: '100%',
    alignItems: 'center',
    marginBottom: 1
  }
});
