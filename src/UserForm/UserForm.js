import React, { Component } from "react";
import './UserForm.css';
import ChatRoom from '../ChatRoom/ChatRoom';

class ChatOpenButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        Chat Open
      </button>
    );
  }
}

class UserForm extends Component {

  constructor() {
   super();

   this.state = {
     clicked: false
   };

   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   this.setState({
     clicked: true
   });
 }

  render() {
    return (
      <div>
        <form className="UserForm">
          <table rules="rows">
            <tr>
              <th>The Rules.</th>
            </tr>
            <tr>
              <td>1. Do not post any sensitive information (i.e. Personal Information, URLs, etc.).</td>
            </tr>
            <tr>
              <td>2. Be kind to another, and watch the language. Harrassment of any kind will not be tolerated.</td>
            </tr>
            <tr>
              <td>3. Try to follow an easy commenting format (Game|User Name|Stuff).</td>
            </tr>
            <tr />
          </table>
          <div className="ChatOpenButton">
          <button onClick={this.handleClick} > Go to Chat! </button>
          {this.state.clicked ? <ChatRoom /> : null}
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
