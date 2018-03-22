import React, { Component } from 'react';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact :'Contact'
        }
    }

    getContact(){
        this.setState({ contact: this.props.userInfo.html_url});

    }


    render() {
        if (this.props.userInfo.Message === "Not Found")
        {
            return (<div className='container'> No data to display</div>)
        }
        else{
        return (
            <div className='container'>
                <h2>User Profile</h2>
                <div className="card">
                    <img src={this.props.userInfo.avatar} alt={this.props.userInfo.name} />
                    <h1>{this.props.userInfo.name}</h1>
                    <p className="title">Number of Repositories {this.props.userInfo.repos}</p>
                    <p>{this.props.userInfo.location}</p>
                    <p><button onClick={this.getContact.bind(this)}>{this.state.contact}</button></p>
                </div>
            </div>
        )
        }
    }
}

export default Profile;