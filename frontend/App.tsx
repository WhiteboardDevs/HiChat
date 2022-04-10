import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const url = "https://gner4se1je.execute-api.ap-south-1.amazonaws.com/Prod/func1"
  let [resp, setResp] = useState({});

  // useEffect(() => {
  //     axios.get(url)
  //     .then(response => response.data)
  //     .then(json => {
  //       console.log(json);
  //     setResp(json);
  //   })
  // })

  useEffect(() => {
    axios.get(url)
    .then(response => setResp(response.data))
})


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{ JSON.stringify(resp) }</Text>
      <StatusBar style="auto" />
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
});
