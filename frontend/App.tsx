import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { Button } from "react-bootstrap";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchContacts } from './components/SearchContacts';

 
export default function App() {
  // const url = "https://gner4se1je.execute-api.ap-south-1.amazonaws.com/Prod/func1"
  const func1_url = "http://127.0.0.1:3000/func1";
  const func2_url = "http://127.0.0.1:3000/func2";
  
  let [func1_resp, setFunc1Resp] = useState({});
  let [func2_resp, setFunc2Resp] = useState({});

  const [current, setCurrent] = useState('HomeScreen');

  // useEffect(() => {
  //     axios.get(url)
  //     .then(response => response.data)
  //     .then(json => {
  //       console.log(json);
  //     setResp(json);
  //   })
  // })

  
// passing an empty array as second argument triggers the callback in 
// useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

useEffect(() => {
  axios.get(func1_url)
  .then(response => setFunc1Resp(response.data))
},[]);

// useEffect(() => {
//   axios.get(func2_url)
//   .then(response => setFunc1Resp(response.data))
// },[]);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="SearchContacts"
        onPress={() => navigation.navigate('SearchContacts')}
      />
    </View>
  );
}

function SearchContactsScreen() {
  return (
    <SearchContacts/>
  );
}

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchContacts" component={SearchContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
