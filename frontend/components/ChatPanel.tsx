import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { ChatInputBox } from "./ChatInputBox";
import { MessageContainer } from "./MessageContainer";
import { MessageStatus, MessageType, SEND_MESSAGE_URL, SEND_MESSAGE_LOCAL_URL } from "./Constants";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { UserContext } from "./UserContext";


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
    self: true,
    status: MessageStatus.Seen
  },
  {
    id: "3333",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam mauris, facilisis at lorem sed, malesuada placerat turpis. Integer pulvinar arcu erat, vitae malesuada leo accumsan et. In ornare venenatis dolor vel pulvinar. Curabitur finibus feugiat dolor id euismod. Suspendisse vel placerat ligula. Duis a maximus sapien. Duis malesuada, tellus.",
    time: 1650081474,
    self: true,
    status: MessageStatus.Sent
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
    self: true,
    status: MessageStatus.Sent
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
  static contextType = UserContext;
  state = {
    messages: messages,
    counter: 10
  }

  sendMessage = (message: MessageType) => {
    let messages = [...this.state.messages]
    let latestMessage = {...messages[messages.length-1]}
    let context = this.context

    axios
      .post(SEND_MESSAGE_URL, {"from": context.userName, "to": "riyaz", "message": message})
      .then((result) => {
        console.log("POST Result: ", result)
        latestMessage.status = MessageStatus.Sent
        messages[messages.length-1] = latestMessage
        this.setState ({messages: messages})
      })
      .catch(() => {
        console.log("Error sending message to server")
      })
  }

  newMessageHandler = (message: string) => {
    let newMessage: MessageType = {
      time: 1650081474 + this.state.counter,
      id: uuidv4(),
      message: message,
      self: true,
      status: MessageStatus.Sending
    }

    this.setState({
      messages: [...this.state.messages, newMessage]
    }, () => this.sendMessage(newMessage));
        
  }

  render(){
    return (
      <View style={[styles.container]}>
        <SafeAreaView style={{flex:1}}>
          <MessageContainer messages={this.state.messages}/>
          <ChatInputBox onNewMessage={this.newMessageHandler}/> 
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
