import axios from 'axios';
import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { SearchContacts } from './components/SearchContacts';
import { ChatPanel } from './components/ChatPanel';
import { Regstyles, Registration } from './components/Registration';
import { readData, removeData } from './services/AsyncStorage';
// import { PhoneinputTest } from './components/PhoneinputTest'; 

const func1_url = "http://127.0.0.1:3000/func1";
const func2_url = "http://127.0.0.1:3000/func2";

const STORAGE_KEY = '@save_phone'

const Stack = createNativeStackNavigator();

type State = {
  phonenumber: string | undefined,
  func1_resp: {},
  func2_resp: {},
  current: string,
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      phonenumber: "",
      func1_resp: {},
      func2_resp: {},
      current: "",
    }
     // const url = "https://gner4se1je.execute-api.ap-south-1.amazonaws.com/Prod/func1"
  }

  componentDidMount(){
    console.log("inside mount")
    readData(STORAGE_KEY)
      .then( (mphone) => {this.setState({phonenumber: mphone})})
      .catch(() => console.log("inside catch"))
      .finally(() => console.log("inside finally"));
    
    // axios.get(func1_url)
    // .then(response => this.setState({func1_resp: response.data}))
  }

  HomeScreen({ navigation }) {
    console.log("homescreen")
      return (
        <View>
          <View style={styles.container}>
            <Text style={[Regstyles.text,{fontSize: 30}]}>Home Screen</Text>
            <View style={Regstyles.row}>
              <View style={{padding: 10}}>
                <Button
                  title="SearchContacts"
                  onPress={() => navigation.navigate('SearchContacts')}
                />
              </View>
              <View style={{padding: 10}}>
                <Button
                  title="Chat with me"
                  onPress={() => navigation.navigate('ChatPanel')} 
                />
              </View>
            </View>
          </View>
          <View>
            {/* <Pressable 
              style={Regstyles.btn} 
              onPress={() => removeData(STORAGE_KEY)}>
              <MaterialIcons name="delete" size={25}/>
            </Pressable> */}
          </View> 
          {/* Trigger to call clearstorage function (function is not working) 
          Error: cannot read properties of undefined */}
        </View>
      );
  }

  DefaultScreen({ navigation }){
    return(
      <View>
        <View>
          <Text style={[Regstyles.text,{fontSize: 30}]}>HiChat</Text>
          <Text style={[Regstyles.text,{fontSize: 20}]}>Connecting People...</Text>
        </View>
        <View>
          <Pressable 
            style={[Regstyles.button,{backgroundColor: 'black'}]} 
            onPress={() => navigation.navigate('Registration')}>
            <Text style={[Regstyles.text,{fontSize: 16, color: 'white',}]}>Sign Up</Text>
          </Pressable> 
        </View>
      </View>
    )
  }
  
  render(){
    console.log(this.state.phonenumber)
    
      return (
        <>
        { this.state.phonenumber ?
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={this.HomeScreen} />
              <Stack.Screen name="SearchContacts" component={SearchContacts} />
              <Stack.Screen name="ChatPanel" component={ChatPanel} />
            </Stack.Navigator>
          </NavigationContainer>
        :
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="DefaultScreen" component={this.DefaultScreen} />
              <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
          </NavigationContainer>
       }
        </>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
