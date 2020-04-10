import React from 'react';
import '../index.css';
import axios from 'axios';

export default class UserCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: props.username,
      user: {
        name: '',
        avatar_url: '',
        login: '',
        html_url: '',
        followers: '',
        following: '',
        bio: null
      }
    };
  }

  componentDidMount = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(response => {
              // handle success
              console.log(response.data);
              this.setState({user: response.data});
        }) // end .then
        .catch(error => {
          // handle error
          console.log(error);
        });
  }

  render = () => {
    return (
      <div className="card">
        <img src={this.state.user.avatar_url} />
        <div className="card-info">
          <h3 className="name">{this.state.user.name}</h3>
          <p className="username">{this.state.user.login}</p>
          <p>Profile: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></p>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
          {this.state.user.bio != undefined && this.state.user.bio != null?<p>Bio: {this.state.user.bio}</p>:<></>}
        </div>
      </div>
    );
  }
}
