import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import { saveData } from "../services/AsyncStorage";

const STORAGE_KEY = '@save_phone'
  
type State = {
  code: string,
  phone: string,
}

class Registration extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      code: "",
      phone: "",
    }
  }

  Register = () => {
    let phone = this.state.phone.replace(/^\s+|\s+$/g, "")
    let code = this.state.code.replace("DEF",'')
    if (!code || !phone) return;
    console.log('Registering User')
    saveData(STORAGE_KEY, code+phone)
    console.log(code)
    this.setState({phone: ""})
    this.setState({code: ""})
  }

  render(){
    return (
      <View style={{backgroundColor: "black", alignItems: "center", height:"100%",width:"100%"}}>
          <Text style={[Regstyles.text,{marginTop: 10, fontSize: 30, color: "white"}]}> User Registration </Text>
          <View style={[Regstyles.row,{ height: 100,alignItems: 'center', justifyContent: 'center', display:"flex"}]}>
            <Picker
              selectedValue={this.state.code}
              style={[Regstyles.input,{backgroundColor: "lightgrey", height:50, width:100}]}
              onValueChange={(itemValue, itemIndex) => this.setState({code: itemValue})}
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
            <TextInput style={[Regstyles.input,{backgroundColor: "white", height: 50, width:240}]}
                placeholder="Phone"
                onChange={(event) => { this.setState({ phone: event.nativeEvent.text }) }}
                value={this.state.phone}
                placeholderTextColor="gray"
                keyboardType="numeric"
                maxLength={10}
            />
          </View>
          <View>
          <Pressable style={[Regstyles.button,{backgroundColor: 'white'}]} onPress={this.Register}>
            <Text style={[Regstyles.text,{fontSize: 16}]}>Register</Text>
          </Pressable>
          </View>
      </View>
    )
  }
}

export const Regstyles = StyleSheet.create({
  input: {
    marginTop: 50,
    height: 40,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    maxWidth: 150,
    alignSelf: "center",
    margin: 20,
  },
  text: {
    letterSpacing: 0.25,
    fontWeight: "bold",
    textAlign: "center",
  }
});
  
export { Registration };