import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Intro from './Intro';
import Github from './Github';
import Auth0Lock from 'auth0-lock';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      accessToken: '',
      profile: {}
    }
  }


  static defaultProps = {
    clientID: '',
    domain: ''
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      //console.log(authResult);
      this.lock.getProfile(authResult.accessToken, (error,profile) => {
        if(error){
          console.log(error);
          return;
        }
        else{
          this.setProfile(authResult.accessToken,profile);
        }
      });
    })
    this.getProfile();
  }

  setProfile(accessToken,profile){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile',JSON.stringify(profile));
    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    })
  }
  getProfile(){
    if (localStorage.getItem('accessToken') != null)
    {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      })
    }

  }
  showLock(){
    this.lock.show();
  }
  onLogout() {
    this.setState( {
      accessToken: '',
      profile: {}
    }, () => { 
      localStorage.removeItem('accessToken')
      localStorage.removeItem('profile')
    })
  }

  render() {
    let github;
    if(this.state.accessToken){
      github = <Github />;
    }else{
      github = "Click on login to view Github viewer";
    }
    return (
      <div className="App">
        <Header
          lock={this.lock}
          accessToken= {this.state.accessToken}
          onLogout={this.onLogout.bind(this)}
          onLogin={this.showLock.bind(this)}
        />
        {github}
        <Intro />
        
       </div>
    );
  }
}

export default App;
