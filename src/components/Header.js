import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

    onLogin(){
        this.props.onLogin();
    }
    onLogout(){
        this.props.onLogout();
    }
    
    render() {
        var page;
        if (this.props.accessToken) {
        page = <NavItem onClick={this.onLogout.bind(this)} href="#">
                Logout
            </NavItem>
        }
        else {
        page = <NavItem onClick={this.onLogin.bind(this)} href="#">
            Login
            </NavItem>
        }
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Github Searcher
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                       {page}
                    </Nav>
                </Navbar>
                <header className="App-header">
                    <h1 className="App-title">Welcome to CodeVu</h1>
                </header>
            </div>
        );
    }
}

export default Header;
