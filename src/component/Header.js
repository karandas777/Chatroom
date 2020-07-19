import React, { Component } from 'react'

export default class Header extends Component {


    funLogout=()=>{
        localStorage.removeItem('username');
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container-fluid fixed-top w-100 bg-light px-0">
                <div className="container">
                <nav className="navbar navbar-light px-0">
                    <span className="navbar-brand">
                        <img src={require('../assets/logo.png')} width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
                        Chatroom
                    </span>
                    {
                        localStorage.getItem('username') ? (
                            <span className="float-right d-inline-block">
                                <button className="btn btn-danger btn-sm" onClick={this.funLogout}>
                                    <i className="fa fa-power-off"></i> {localStorage.getItem('username').slice(0,10)}
                                </button>
                            </span>
                        ) : null
                    }
                </nav>
                </div>
            </div>
        )
    }
}
