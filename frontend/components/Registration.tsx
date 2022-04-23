import React, { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, Pressable } from "react-native";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { regStyles } from '../styles/css';
import { StyleSheet } from "react-native";

import { saveData } from "../services/AsyncStorage";

import { STORAGE_KEY_PHONE, STORAGE_KEY_USER, TITLE_FONT_SIZE, FONT_SIZE } from './Constants';

type State = {
  userName: string,
  phone: string,
  code: string,
}

class Registration extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      code: "",
      userName: "",
      phone: "",
    }
  }

  Register = () => {
    let phone = this.state.phone.replace(/^\s+|\s+$/g, "")
    let code = this.state.code.replace("DEF", '')
    let user = this.state.userName
    if (!code || !phone || !user) return;

    saveData(STORAGE_KEY_PHONE, code + phone)
    saveData(STORAGE_KEY_USER, user)
    console.log('Registering User')
    console.log(code)
    console.log(user)

    this.setState({ userName: "" })
    this.setState({ phone: "" })
    this.setState({ code: "" })
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={[regStyles.text, styles.title]}> User Registration </Text>
        <View>
          <TextInput
            style={[regStyles.input, styles.userNameinput]}
            placeholder="User Name"
            onChange={(event) => { this.setState({ userName: event.nativeEvent.text.replace(/[^A-Za-z0-9]/g, '') }) }}
            value={this.state.userName}
            placeholderTextColor="gray"
            maxLength={30}
          />
        </View>
        <View style={[regStyles.row]}>
          <Picker
            selectedValue={this.state.code}
            style={[regStyles.input, styles.phoneCodeinput]}
            onValueChange={(itemValue, itemIndex) => this.setState({ code: itemValue })}
          >
            <Picker.Item label="Code" value="DEF" />
            <Picker.Item label="+49" value="+49" />
            <Picker.Item label="+91" value="+91" />
            <Picker.Item label="+44" value="+44" />
            <Picker.Item label="+43" value="+43" />
            <Picker.Item label="+61" value="+61" />
            <Picker.Item label="+64" value="+64" />
            <Picker.Item label="+1" value="+1" />
          </Picker>
          <TextInput
            style={[regStyles.input, styles.phoneNumberinput]}
            placeholder="Phone"
            onChange={(event) => { this.setState({ phone: event.nativeEvent.text.replace(/[^0-9]/g, '') }) }}
            value={this.state.phone}
            placeholderTextColor="gray"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <View>
          <Pressable style={[regStyles.button, { backgroundColor: 'white' }]} onPress={this.Register}>
            <Text style={[regStyles.text, { fontSize: FONT_SIZE }]}>Register</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: TITLE_FONT_SIZE,
    marginTop: 10,
    color: "white"
  },
  userNameinput: {
    backgroundColor: "white",
    marginTop: 50,
    height: 50,
    width: 340
  },
  phoneCodeinput: {
    backgroundColor: "lightgrey",
    height: 50,
    width: 100
  },
  phoneNumberinput: {
    backgroundColor: "white",
    height: 50,
    width: 240
  }
});


export { Registration };