import React, { Component } from 'react';
import Profile from './components/Profile';
import Search from './components/Search';

const API = 'https://api.github.com/users';

class Github extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'snthl-s',
            name: '',
            avatar: '',
            repos: '',
            html_url: '',
            location:'',
            notFound:''

        }
    }

    getProfile(username){
        var finalUrl = `${API}/${username}`;
        
        fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                username: data.login,
                name: data.name,
                avatar: data.avatar_url,
                repos: data.public_repos,
                html_url: data.html_url,
                location: data.location,
                notFound: data.message

            })
        })
        .catch((error) => console.log('There is a problem in fetching the data'));
    }

    componentDidMount(){
        this.getProfile(this.state.username);
    }

    render(){
        return(
            <div>
               <div className='container'>
                <Search searchProfile={this.getProfile.bind(this)}/>
                <Profile userInfo={this.state}  />
               </div>
            </div>
        )
    }
}

export default Github;