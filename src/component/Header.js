import React, { Component } from 'react'

export default class Header extends Component {


    funLogout=()=>{
        localStorage.removeItem('username');
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container-fluid fixed-top w-100 bg-grad-light shadowx px-0">
                <div className="container">
                <nav className="navbar navbar-light px-0 py-1">
                    <span className="navbar-brand hand-written">
                        <img src={require('../assets/logo.png')} width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
                        Chat<span className="font-weight-bold">Buddy</span>
                    </span>
                    {
                        localStorage.getItem('username') ? (
                            <span className="float-right d-inline-block">
                                <button className="btn bg-grad-light text-dark border-0 mr-1" disabled>
                                <i className="fa fa-user-circle"></i> {localStorage.getItem('username').slice(0,10)}
                                </button>
                                <button className="btn bg-grad-danger text-light border-0" onClick={this.funLogout}>
                                    <i className="fa fa-power-off"></i>
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
