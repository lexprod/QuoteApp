import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

// async function getMoviesFromApi() {
//   try {
//     let response = await fetch(
//       'Your URL to fetch data from',
//     );
//     let responseJson = await response.json();
//     console.log(responseJSon);
//     return responseJson;
//   } catch (error) {
//     console.error(error);
//   }
// }


export default function App() {
  return (
    <View style={styles.supercontainer}>
      <View style={styles.quotecontainer}>
        <Text style={styles.quotetext}> "Adversity causes some men to break, others to break records." </Text>
        <Text style={styles.credittext}>--- William Arthur Ward</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <Button color='#636e72' title="new" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  quotecontainer: {
    width: '80%',
    borderColor: '#d9d',
    borderWidth: 1,
    flex: 5
  },
  supercontainer: {
    paddingHorizontal: 40,
    paddingVertical: 50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fdcb6e'
  },
  quotetext: {
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'light',
  },
  credittext: {
    fontStyle: 'italic',
    fontSize: 14
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexBasis: 100,
    flex: 1,
    padding: 2,
    borderColor: '#f1f',
    borderWidth: 1
  }
});
