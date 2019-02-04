import React, { Component } from "react";
import UserForm from './UserForm/UserForm';

class StartButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        Start Here
      </button>
    );
  }
}

class Home extends Component {
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
        <h2>Welcome, Player.</h2>
        <p>
        If this is your first time visiting, and you'd like to understand the reasoning
        of this website, please visit the Mission section. And for the already initiated,
        welcome back!
        </p>
        <p>
        VR One World is currently in it's first phase of production. It is a rudimentary
        live chat system in which any user may post into. The objective being that a player
        will be able to connect with another player using the website to play a multiplayer
        Virtual Reality (VR) game, or even just to socialize and chat.
        </p>
        <p>
        Open chat is below. Please follow the rules, and let's try together to
        become the community haven that VR players need.
        </p>

        <div className="formButton">
        <button onClick={this.handleClick} > Start Here </button>
        {this.state.clicked ? <UserForm /> : null}
        </div>

      </div>
    );
  }
}

export default Home;