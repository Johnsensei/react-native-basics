import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image, ImageBackground } from 'react-native';

import Nav from './src/Nav';
import GenerateNumber from './src/GenerateNumber';
import ListItems from './src/ListItems';
import Inputs from './src/Inputs';

import Johnsensei from './img/JohnsenseiWalk.png'

console.disableYellowBox = true;

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

  const onItemRemove = (position) => {
    //alert('Remove');
    const newArray = random.filter((item, i) => {
      return position !== i;
    });
    setRandom(newArray);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Nav nameOfApp='My app'>Hello and Welcome</Nav>
      <ScrollView
      // onContentSizeChange={(w, h) => alert(h)}
      // onMomentumScrollBegin={() => alert('Scrolling')}
      // onMomentumScrollEnd={() => alert('Scrolling')}
      // onScroll={() => alert('Scrolling')}
      style={{width:'100%'}}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            My name is John.
          </Text>
          {/* Put image here */}
          <Image
            source={Johnsensei}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.lineText}>
            I am working on a React Native app.
          </Text>
        </View>
        { hello ?
          <Text style={{textAlign: 'center'}}>Hello was true</Text>
          : null }
        <View style={styles.container}>
          <GenerateNumber add={() => onAddRandom()}/>
        </View>
        <View style={styles.container}>
          <ListItems items={random} remove={(pos) => onItemRemove(pos)}/>
        </View>
        <View style={styles.container}>
          <Inputs />
          <Image
          // source={{uri: 'https://en.wikipedia.org/wiki/X-Men#/media/File:X-Men_legacy.jpg/'}}
          source={{uri:'https://picsum.photos/400/400'}}
          style={{width: 200, height: 400, marginTop: 1}}
          resizeMode='contain'
          // onLoadEnd={()=> alert('image loaded')}
        />
        </View>
        {/* <ActivityIndicator size="large" color="#0000ff"/> */}
        
      </ScrollView>
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
    alignContent: 'center',
    textAlign: 'center',
    marginBottom: 1
  }
});
