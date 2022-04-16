import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { ChatInputBox } from "./ChatInputBox";
import { MessageContainer } from "./MessageContainer";

type MessageType = {
  id: string,
  message: string,
  time: number,
  self?: boolean
}

const messages: MessageType[] = [
  {
    id: "1111",
    message: "Hey buddy, how you doing?",
    time: 1650081471
  },
  {
    id: "2222",
    message: "I am great, how about you?",
    time: 1650081472,
    self: true
  },
  {
    id: "3333",
    message: "I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!I am great as well!",
    time: 1650081474,
    self: true
  },
];

type State = {
  messages: MessageType[]
  counter: number
}


class ChatPanel extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      messages: messages,
      counter: 4
    }
  }

  sendMessage = (message: string) => {
    this.state.messages.push({
      time: 1650081474 + this.state.counter,
      id: this.state.counter.toString(),
      message: message,
      self: true
    })

    this.setState({counter: this.state.counter+1})
  }

  render(){
    return (
      <View style={[styles.container]}>
        <SafeAreaView style={{flex:1}}>
          <MessageContainer messages={this.state.messages}/>
          <ChatInputBox sendMessageHandler={this.sendMessage}/> 
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Lucida Grande'
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    minWidth: 300
  }
});


export { ChatPanel };
