import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MessageStatus } from "./Constants";


type MessageProps = {
  messageText: string, 
  isSelfMsg: boolean,
  status?: MessageStatus
}


class Message extends Component<MessageProps, {}> {
  render() {
    return (
      <View style={[styles.messageWrapper, this.props.isSelfMsg ? styles.selfMsgWrapper: styles.recipientMsgWrapper]}>
        <Text style={[this.props.isSelfMsg ? {} : styles.recipientMsgColor, styles.message]}>{this.props.messageText}</Text>
        <Text style={[styles.timeStamp, styles.messageStamp]}>11:42 PM</Text>
        { this.props.isSelfMsg && 
          <MaterialIcons 
            name={ this.props.status == MessageStatus.Sent ? "done" : this.props.status == MessageStatus.Seen ? "done" : "pending" } 
            style={[styles.messageStatus, styles.messageStamp]}
          />
        }
      </View>);
  }
}

const styles = StyleSheet.create({
  messageWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 6,
    paddingLeft: 8,
    paddingBottom: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    maxWidth: "80%",
    flexWrap: "wrap"
  },
  recipientMsgWrapper: {
    backgroundColor: "#212121",
    alignSelf: "flex-start", // aligns recipient messages to the left
    borderTopRightRadius: 8,
  },
  selfMsgWrapper: {
    backgroundColor: "#fff",
    alignSelf: "flex-end", // aligns user messages to the right
    borderTopLeftRadius: 8
  },
  message: {
    paddingRight: 8
  },
  recipientMsgColor: {
    color: "white"
  },
  messageStamp: {
    color: "#a2acb4",
    alignSelf: "flex-end", // aligns tick mark to the right
    marginRight: 6
  },
  timeStamp: {
    fontSize: 10,
    marginLeft: "auto" // To keep timestamp always to the right
  },
  messageStatus: {
    fontSize: 14,
    marginTop: 2,
    marginRight: 6,
  }
});


export { Message };