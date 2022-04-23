import React, { Component, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// const phoneInput = useRef<PhoneInput>(null);
type State = {
  value: string,
  countryCode: string,
  formattedValue: string,
  valid: boolean,
  disabled: boolean,
  showMessage: boolean,

}
class PhoneinputTest extends Component<{}, State> {
  phoneInput = React.createRef<PhoneInput>();
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '',
      countryCode: '',
      formattedValue: '',
      valid: false,
      disabled: false,
      showMessage: false,
    }
  }
  demo = () => {
    console.log("demo triggered")
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <SafeAreaView style={styles.wrapper}>
            {this.state.showMessage && (
              <View style={styles.message}>
                <Text>Country Code : {this.state.countryCode}</Text>
                <Text>Value : {this.state.value}</Text>
                <Text>Formatted Value : {this.state.formattedValue}</Text>
                <Text>Valid : {this.state.valid ? 'true' : 'false'}</Text>
              </View>
            )}
            <PhoneInput
              ref={this.phoneInput}
              defaultValue={this.state.value}
              defaultCode="IN"
              layout="first"
              onChangeText={(text) => { this.setState({ value: text }) }}
              onChangeFormattedText={(text) => {
                this.setState({ formattedValue: text })
                this.setState({ countryCode: this.phoneInput.current?.getCountryCode() || '' })
              }}
              countryPickerProps={{ withAlphaFilter: true }}
              disabled={this.state.disabled}
              withDarkTheme
              withShadow
              autoFocus
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                const checkValid = this.phoneInput.current?.isValidNumber(this.state.value);
                this.setState({ showMessage: true })
                this.setState({ valid: checkValid ? checkValid : false })
                this.setState({ countryCode: this.phoneInput.current?.getCountryCode() || '' })
                let getNumberAfterPossiblyEliminatingZero = this.phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
                console.log(getNumberAfterPossiblyEliminatingZero);
              }}>
              <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, this.state.disabled ? {} : styles.redColor]}
              onPress={() => {
                this.setState({ disabled: !this.state.disabled })
              }}>
              <Text style={styles.buttonText}>{this.state.disabled ? 'Activate' : 'Disable'}</Text>
            </TouchableOpacity>
            <Pressable onPress={this.demo}>
              <Text>Demo</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7CDB8A',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  redColor: {
    backgroundColor: '#F57777'
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export { PhoneinputTest };