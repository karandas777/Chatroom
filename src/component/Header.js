import React, { Component } from 'react'

export default class Header extends Component {


    funLogout=()=>{
        localStorage.removeItem('username');
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container-fluid fixed-top w-100 bg-grad-light shadow-sm px-0">
                <div className="container">
                <nav className="navbar navbar-light px-0 py-1">
                    <span className="navbar-brand brandname mt-1 text-primary">
                        <i className="fa fa-commenting"></i> <span className="text-dark"> Chat</span>Buddy
                    </span>
                            <span className="float-right d-inline-block">
                                <button className="btn bg-grad-light btn-sm text-dark border-0 mr-1 brandname" disabled>
                                <i className="fa fa-user-circle"></i> {localStorage.getItem('username') && localStorage.getItem('username').slice(0,10)}
                                </button>
                                
                                {
                                    localStorage.getItem('username') ? (
                                        <button className="btn bg-grad-danger shadow-sm text-light border-0" onClick={this.funLogout}>
                                            <i className="fa fa-power-off"></i>
                                        </button>
                                    ) : null
                                }
                                
                            </span>
                </nav>
                </div>
            </div>
        )
    }
}
