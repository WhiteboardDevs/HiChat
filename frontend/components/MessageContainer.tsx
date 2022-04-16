import React from "react";
import { Component } from "react";
import { FlatList, View, Text, ListRenderItemInfo, StyleSheet } from "react-native";


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
    <Text>{messageProps.messageText}</Text>
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
    fontFamily: 'Lucida Grande'
  },
  chatMsgCommon: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },
  recipientMsg: {
    backgroundColor: "#8774E1",
    color: "white",
    alignSelf: 'flex-start',
    borderTopRightRadius: 8,
  },
  selfMsg: {
    backgroundColor: "#fff",
    color: "black",
    alignSelf: 'flex-end', // aligns user messages to the right
    borderTopLeftRadius: 8,
  }
});

export { MessageContainer };