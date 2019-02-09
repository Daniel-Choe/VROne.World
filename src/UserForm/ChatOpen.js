import React, { Component } from "react";

class ChatOpenButton extends Component {
  render() {
    return (
      <button {...this.props}>
        Open Chat!
      </button>
    );
  }
}

export default ChatOpenButton;
