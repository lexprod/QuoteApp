import React from 'react';
import axios from 'axios';
import Main from './screens/Main';
import { Provider } from 'react-redux';
import { PersistState } from 'redux-persist/integration/react';
import { PersistGate } from "redux-persist/integration/react";

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
    <Main />

  );
}

