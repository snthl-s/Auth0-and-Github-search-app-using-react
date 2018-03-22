import React, { Component } from 'react';

class Search extends Component {

    searchUser(e){
        e.preventDefault();
        let user = this.refs.username.value;
        this.props.searchProfile(user);
        this.refs.username.value = '';
    }

    render() {
        return (
            <div>

                <div className='search-box'>
                    <form onSubmit={
                        this.searchUser.bind(this)
                    }>
                        <label>Search  
                        <input type='search' ref='username' placeholder='Type Username'/>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;