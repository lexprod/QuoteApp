import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
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
        <Pressable>
          <Text style={styles.buttontext}>
            New quote plz
          </Text>
        </Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  quotecontainer: {
    backgroundColor: '#ffeaa7',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 30
  },
  supercontainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdcb6e'
  },
  quotetext: {
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'light',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20
  },
  credittext: {
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 15,
    marginHorizontal: 20
  },
  buttoncontainer: {
    width: '100%',
    justifyContent: 'center',
    margin: 50,
    backgroundColor: '#ffeaa7',
    height: 100,
    borderRadius: 100
  },
  buttontext: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});
