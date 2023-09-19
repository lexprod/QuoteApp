import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.quotetext}>Quote!</Text>
        <Text style={styles.credittext}>--author!</Text>
      </View>
      <View style={styles.container}>
        <Text>Open up QUOTES!</Text>
      </View>
      <View style={styles.container}>
        <Text>Open up QUOTES!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#444',
    borderWidth: 5,
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    width: '80%',
    backgroundColor: '#ddd',
  },
  supercontainer: {
    margin: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around'
  },
  quotetext: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  credittext: {
    fontStyle: 'italic',
    fontSize: 14
  }
});
