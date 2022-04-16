import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, ViewStyle, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type MessageType = {
  id: string,
  message: string,
  time: number,
  self?: boolean
}

type Props = {
  style?: ViewStyle
  sendMessageHandler: (msg: string) => void
}

type State = {
  chatInput: string,
  height: number
}

const CHAT_BOX_MIN_HEIGHT = 64
const ICON_SIZE = 36
const FONT_SIZE = 16

class ChatInputBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chatInput: "",
      height: 0
    }
  }

  sendMessage = () => {
    let chatInput = this.state.chatInput.replace(/^\s+|\s+$/g, "")
    if (!chatInput) return;
    console.log('Sending message')
    this.props.sendMessageHandler(chatInput)
    this.setState({chatInput: ""})
  }

  render(){
    return (
      <View style={[styles.chatBox, this.props.style]}>
        <View style={[styles.leftIconsWrapper, styles.chatBoxIcon]}>
          <MaterialIcons name="emoji-emotions" size={ICON_SIZE} style={styles.iconColor}/>
        </View>
        <TextInput style={[styles.chatBoxInput, {height: Math.max(CHAT_BOX_MIN_HEIGHT, this.state.height)}]}
          placeholder="Type a message.."
          multiline={true}
          onChange={(event) => { this.setState({ chatInput: event.nativeEvent.text }) }}
          onContentSizeChange={(event) => { this.setState({ height: event.nativeEvent.contentSize.height }) }}
          value={this.state.chatInput}
          placeholderTextColor="gray"
        />
        <Pressable style={[styles.rightIconsWrapper, styles.chatBoxIcon]} onPress={this.sendMessage}>
          <MaterialIcons name="send" size={ICON_SIZE} style={styles.iconColor}/>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chatBox: {
    backgroundColor: "#212121",
    display: "flex",
    flexDirection: "row", // To put elements side by side
    fontSize: 36
  },
  chatBoxInput: {
    paddingTop: Platform.OS === 'android' ? 0 : (CHAT_BOX_MIN_HEIGHT-FONT_SIZE)/2, // Android auto centers text inside text area, but not other platforms
    paddingLeft: 5,
    paddingRight: 5,
    color: "white",
    bottom: 0,
    height: 30,
    maxHeight: 300, // up to what height should the chat window grow upon new lines. Post this height, scroll bar is shown
    borderWidth: 0.01, // required for generating content change event on deleting new lines...why so? idk..
    borderColor: "transparent",
    flexGrow: 1, // For dynamic resizing based on screen size
    flexShrink: 1 // Adjusts size (and wraps text) based on next sibling position
  },
  chatBoxIcon: {
    marginBottom: (CHAT_BOX_MIN_HEIGHT - ICON_SIZE)/2,
    alignSelf: "flex-end",
    zIndex: 5
  },
  leftIconsWrapper: {
    marginLeft: (CHAT_BOX_MIN_HEIGHT - ICON_SIZE)/3, // eg: total height is 64, emoji is 36, leftover height is 28
    marginRight: 2,
  },
  rightIconsWrapper: {
    marginLeft: 2,
    marginRight: (CHAT_BOX_MIN_HEIGHT - ICON_SIZE)/3,
  },
  iconColor: {
    color: "#a2acb4",
  }

});


export { ChatInputBox };
