import React from "react";
import { Component } from "react";
import { FlatList, View, Text, ListRenderItemInfo, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


type MessageType = {
  id: string,
  message: string,
  time: number,
  self?: boolean
}

type MessageProps = {
  messageText: string, 
  isSelfMsg: boolean
}

const Message = (messageProps: MessageProps) => (
  <View style={[styles.messageWrapper, messageProps.isSelfMsg ? styles.selfMsgWrapper: styles.recipientMsgWrapper]}>
    <Text style={[messageProps.isSelfMsg ? {} : styles.recipientMsgColor, styles.message]}>{messageProps.messageText}</Text>
    <Text style={[styles.timeStamp, styles.messageStamp]}>11:42 PM</Text>
    { messageProps.isSelfMsg &&
      <MaterialIcons name="done" size={12} style={[styles.messageStatus, styles.messageStamp]}/>
    }
  </View>
);

type Props = {
  messages: MessageType[]
}

type State = {
  selectedId: string
}

class MessageContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedId: "0"
    }
  }
  
  render() {
    const renderMessage = (messageInfo: ListRenderItemInfo<MessageType>) => {
      const isSelfMsg = messageInfo.item.self === undefined ? false : messageInfo.item.self;

      return (
        <Message
          messageText={messageInfo.item.message}
          isSelfMsg= {isSelfMsg}
        />
      );
    };

    return (
    <View style={{flex: 9.25}}>
      <FlatList
        data={this.props.messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        extraData={this.state.selectedId}
        showsVerticalScrollIndicator={false}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  fontStyle: {
    fontFamily: "Lucida Grande"
  },
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
    alignSelf: "flex-start",
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
    alignSelf:"flex-end",
    marginRight: 6
  },
  timeStamp: {
    fontSize: 10,
    marginLeft: "auto"
  },
  messageStatus: {
    fontSize: 14,
    marginRight: 6,
  }
});

export { MessageContainer };