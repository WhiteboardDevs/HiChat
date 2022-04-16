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
  <View style={[styles.chatMsgCommon, messageProps.isSelfMsg ? styles.selfMsg: styles.recipientMsg]}>
    <Text style={messageProps.isSelfMsg ? {} : styles.recipientMsgColor}>{messageProps.messageText}</Text>
    <Text style={[styles.timeStamp, styles.messageStamp]}>11:42 PM</Text>
    <MaterialIcons name="done" size={12} style={[styles.messageStatus, styles.messageStamp]}/>
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
  chatMsgCommon: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 6,
    paddingLeft: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  recipientMsg: {
    backgroundColor: "#212121",
    alignSelf: "flex-start",
    borderTopRightRadius: 8,
  },
  selfMsg: {
    backgroundColor: "#fff",
    alignSelf: "flex-end", // aligns user messages to the right
    borderTopLeftRadius: 8,
  },
  recipientMsgColor: {
    color: "white"
  },
  messageStamp: {
    marginBottom: 4,
    color: "#a2acb4"
  },
  timeStamp: {
    fontSize: 10,
    marginLeft: 8,
    paddingTop: 8
  },
  messageStatus: {
    fontSize: 14,
    marginLeft: 2,
    marginRight: 6,
    paddingTop: 7,
  }
});

export { MessageContainer };