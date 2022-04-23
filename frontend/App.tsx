import axios from 'axios';

import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { regStyles } from './styles/css';

import { ChatPanel } from './components/ChatPanel';
import { Registration } from './components/Registration';
import { SearchContacts } from './components/SearchContacts';
import { readData, removeData } from './services/AsyncStorage';
// import { PhoneinputTest } from './components/PhoneinputTest';

import { STORAGE_KEY_PHONE, TITLE_FONT_SIZE, SUB_TITLE_FONT_SIZE } from './components/Constants';

const func1_url = "http://127.0.0.1:3000/func1";
const func2_url = "http://127.0.0.1:3000/func2";


const Stack = createNativeStackNavigator();

type State = {
  phoneNumber: string | undefined,
  func1_resp: {},
  func2_resp: {},
  current: string,
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      phoneNumber: "",
      func1_resp: {},
      func2_resp: {},
      current: "",
    }
    // const url = "https://gner4se1je.execute-api.ap-south-1.amazonaws.com/Prod/func1"
  }

  componentDidMount() {
    console.log("inside mount")
    readData(STORAGE_KEY_PHONE)
      .then((mphone) => { this.setState({ phoneNumber: mphone }) })
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
          <Text style={[regStyles.text, { fontSize: TITLE_FONT_SIZE }]}>Home Screen</Text>
          <View style={regStyles.row}>
            <View style={{ padding: 10 }}>
              <Button
                title="SearchContacts"
                onPress={() => navigation.navigate('SearchContacts')}
              />
            </View>
            <View style={{ padding: 10 }}>
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

  DefaultScreen({ navigation }) {
    return (
      <View>
        <View>
          <Text style={[regStyles.text, { fontSize: TITLE_FONT_SIZE }]}>HiChat</Text>
          <Text style={[regStyles.text, { fontSize: SUB_TITLE_FONT_SIZE }]}>Connecting People...</Text>
        </View>
        <View>
          <Pressable
            style={[regStyles.button, { backgroundColor: 'black' }]}
            onPress={() => navigation.navigate('Registration')}>
            <Text style={[regStyles.text, { fontSize: 16, color: 'white', }]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    )
  }

  render() {
    console.log(this.state.phoneNumber)
    return (
      /* IF ELSE condition 
      [If phone number exists in async storage then dispaly Home Screen else display Registration Screen] */
      <>
        {this.state.phoneNumber ?
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
