import React from 'react';
import Main from './screens/Main';

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

