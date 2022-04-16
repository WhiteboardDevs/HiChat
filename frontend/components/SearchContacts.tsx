import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

class SearchContacts extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Search Contacts Here with component</Text>
      </View>
    );
  }
}

export { SearchContacts };
