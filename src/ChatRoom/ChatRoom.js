import React, { Component } from 'react';
import './ChatRoom.css';
import firebase from './firebase/config.js';

class ChatRoom extends Component {

  constructor() {
    super();
    this.state = {
      playerName: '',
      userPrefs: '',
      userMessage: '',
      time: firebase.database.ServerValue.TIMESTAMP,
      allPosts: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const allPostsRef = firebase.database().ref('allPosts');
    const post = {
      title: this.state.playerName,
      content: this.state.userPrefs,
      message: this.state.userMessage,
      timeS: firebase.database.ServerValue.TIMESTAMP
    }
    allPostsRef.push(post);
    this.setState({
      playerName: '',
      userPrefs: '',
      userMessage: '',
      time: ''
    });
  }

  componentDidMount() {
    const allPostsRef = firebase.database().ref('allPosts');
    allPostsRef.on('value', (snapshot) => {
      let allPosts = snapshot.val();
      let newState = [];
      for (let post in allPosts) {
        newState.push({
          id: post,
          playerName: allPosts[post].title,
          userPrefs: allPosts[post].content,
          userMessage: allPosts[post].message,
          time: allPosts[post].timeS
        });
      }
      this.setState({
        allPosts: newState
      });
    });
  }

  removeItem(postId) {
    const postRef = firebase.database().ref(`/allPosts/${postId}`);
    postRef.remove();
  }

  render() {
    return (
      <div className="messageForm">
        <div className="all_chat">
          <div className="all_chat__header">
            <img src="https://s3.amazonaws.com/vrone.world/vroneworld-chat.jpg" className="all-channel__logo" alt="logo" />
            <div className='app'>
              <header>
                  <div className='wrapper'>
                    <h1>Enter a Post Below.</h1>
                  </div>
              </header>
              <h2>
              <br />
              ALL GAMES CHANNEL.
              </h2>
              <div className='container'>
                  <section className='add-post'>
                      <form onSubmit={this.handleSubmit}>
                        <input type="text" name="playerName" placeholder="Player Name" onChange={this.handleChange} value={this.state.playerName}/>
                        <input type="text" name="userPrefs" placeholder="Systems | Games" onChange={this.handleChange} value={this.state.userPrefs}  />
                        <input type="text" name="userMessage" placeholder="Message - Remember Rule #1!" onChange={this.handleChange} value={this.state.userMessage}  />
                        <button>Post!</button>
                      </form>
                  </section>
                  <section className='display-post'>
                    <div className="wrapper">
                      <ul>
                        {this.state.allPosts.map((post) => {
                          return (
                            <li key={post.id}>
                              <h3>{post.playerName}</h3>
                              <p>{post.userPrefs} </p>
                              <p>{post.userMessage} </p>
                              <p>{post.time}
                                <button onClick={() => this.removeItem(post.id)}>Remove Post</button>
                              </p>
                              <p>  </p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                </section>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }

}

export default ChatRoom;
