import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style = {styles.text1}>Discount Calculator</Text>
        <Pressable
            style = {styles.pressable}
            onPress = {() => {
                navigation.navigate('Calculator');
            }}
        >
            <Text style = {styles.text}>Start</Text>
        </Pressable>
      <StatusBar backgroundColor = "green" style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    padding: 10,
    backgroundColor: 'green',
    margin: 10,
    width: 100,
    borderRadius: 3,
    marginTop: 20
  },
  text: {
      color: '#fff',
      fontSize: 24,
      textAlign: 'center',
  },
  text1: {
      fontSize: 28,
      fontWeight: 'bold',
  }
});
