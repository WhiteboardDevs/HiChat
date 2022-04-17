import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { ChatInputBox } from "./ChatInputBox";
import { MessageContainer } from "./MessageContainer";
import { MessageType } from "./Constants";


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
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: true
  },
  {
    id: "4444",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: false
  },
  {
    id: "5555",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: true
  },
  {
    id: "6666",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: false
  },
  {
    id: "7",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: false
  },
  {
    id: "8",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: false
  },
  {
    id: "9",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: false
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
      counter: 10
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
