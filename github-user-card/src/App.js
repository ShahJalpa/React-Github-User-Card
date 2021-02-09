import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: [],
      following: []
    }
  };

  componentDidMount(){
    axios
      .get("https://api.github.com/users/ShahJalpa")
      .then((response) => {
        console.log(response.data);
        this.setState({
          user: response.data
        });
      })
      .catch((error) => {
        console.log(error)
      })

    axios
      .get("https://api.github.com/users/ShahJalpa/followers")
      .then((response) => {
        console.log(response.data);
        this.setState({
          followers: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })  

    axios
      .get("https://api.github.com/users/ShahJalpa/following")
      .then((response) => {
        console.log(response.data);
        this.setState({
          followers: response.data
        })
      })
      .catch((error) => {
        console.log(error)
    })  
  }
  render(){
    return (
      <div className="App">
        <div>
          <h1>GitHub User Card</h1>
        </div>
        <div className="profileCardMaker">
          <img src={this.state.user.avatar_url} alt={this.state.user.login} />
          <h2>{this.state.user.name}</h2>
          <p>{this.state.user.login}</p>
          <p>{this.state.user.location}</p>
          <a href={this.state.user.html_url} ></a>
        </div>
      </div>
    )
  }
}

export default App;


