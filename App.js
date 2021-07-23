import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
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
