import React, { Component } from "react";

class ChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { recipient } = this.props;
    return <h1>Hello, world</h1>;
  }
}
