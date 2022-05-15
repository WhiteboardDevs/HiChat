import React from "react";
import { Component } from "react";
import { FlatList, View, ListRenderItemInfo } from "react-native";
import { Message } from "./Message";
import { MessageType, MessageStatus } from "./Constants";


type Props = {
  messages: MessageType[]
}

type State = {
  selectedId: string
}

class MessageContainer extends Component<Props, State> {
  flatListRef = React.createRef<FlatList<MessageType>>();

  state = {
    selectedId: "0"
  }

  renderMessage = (messageInfo: ListRenderItemInfo<MessageType>) => {
    const isSelfMsg = messageInfo.item.self === undefined ? false : messageInfo.item.self;

    return (
      <Message
        messageText={messageInfo.item.message}
        isSelfMsg={isSelfMsg}
        status={messageInfo.item.status}
      />
    );
  };

  scrollToEnd = (animate: boolean) => {
    console.log(animate);
    if (this.flatListRef === null || this.flatListRef.current === null) {
      console.log("flatlist ref is null")
    }
    else {
      this.flatListRef.current.scrollToEnd({animated: animate})
    }
  }
  
  render() {
    return (
      <View style={{flex: 9.25}}>
        <FlatList style={{flex: 1}}
          data={this.props.messages}
          renderItem={this.renderMessage}
          keyExtractor={(item) => item.id}
          extraData={this.state.selectedId}
          showsVerticalScrollIndicator={false}
          ref={this.flatListRef}
          onContentSizeChange={() => this.scrollToEnd(false)}
          onLayout={() => this.scrollToEnd(false)}
        />
      </View>
    );
  }
}


export { MessageContainer };