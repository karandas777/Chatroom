import React, { Component } from 'react'

export default class Landing extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             placeHolder:"Enter your name",
        }
    }

    componentDidMount(){
        this.funVerifyUser();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = () => {
        if (this.state.username === "" || this.state.username === null || this.state.username === undefined){
            this.setState({placeHolder:"Invalid Name"})
        }
        else{
            this.setUsername()
            .then(()=>{
                this.props.history.push('/chat');
            })

        }
    }

    setUsername = async () => {
        localStorage.setItem('username',this.state.username);
    }
    
    funVerifyUser=()=>{
        let username = localStorage.getItem('username');
        if (username === "" || username === null || username === undefined){
            return false;
        }
        else{
            this.props.history.push('/chat');
        }
    }

    render() {
        return (
            <div className="container-fluid px-0"> 
                <div className="container">
                <div className="jumbotron jumbotron-fluid bg-grad shadowx rounded text-light">
                    <div className="container text-center">
                        <h1 className="display-4 mb-3">Global Chatroom</h1>
                        <p className="lead">Start a conversation with peoples all over the world.</p>
                        <input type="text" name="username" placeholder={this.state.placeHolder} onChange={this.handleChange}
                            className="my-4 form-control mx-auto col-md-3">
                        </input>
                        <button className="btn btn-light" onClick={this.handleSubmit}>Get Started</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
