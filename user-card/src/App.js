import React from 'react';
import axios from 'axios';
import './index.css';
import UserCard from './components/UserCard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      primeUser: 'MTaylor-tech',
      followersArray: [  'tetondan',
                            'dustinmyers',
                            'justsml',
                            'luishrd',
                            'bigknell',
                            'wSedlacek']
    };
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <img src="./assets/lambdalogo.png" alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src="./assets/githublogo.png" alt="GitHub Logo" />
        </header>
        <div class="cards">
          <UserCard username={this.state.primeUser} />
          {this.state.followersArray.map(user=><UserCard username={user} />)}
        </div>
      </div>
    );
  }
}

export default App;
