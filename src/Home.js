import React, { Component } from "react";
import UserForm from './UserForm/UserForm';

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
      <div className="theRules">
        <h2>Welcome, Player.</h2>
        <p>
        If this is your first time visiting, and you'd like to understand the reasoning
        of this website, please visit the Mission section.
        </p>
        <p>
        VR One World is currently in it's first phase of production. It is a rudimentary
        real time communication application where users can come together to connect online.
        This project is built using React on the front end, and using Firebase (BaaS) to store the users' posts,
        while the website is hosted on an AWS S3 Bucket. VROne.World is open source, and available to access publicly.
        For more information, please head to the Contact section.
        </p>
        <p>
        The chat will appear at the bottom. Please follow the rules!
        </p>
        <div className="formButton">
        <button className="fbButton" onClick={this.handleClick} > Start Here </button>
        {this.state.clicked ? <UserForm /> : null}
        </div>

      </div>
    );
  }
}

export default Home;
