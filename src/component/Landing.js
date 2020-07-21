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
        localStorage.setItem("category",this.state.category);
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
            <div className="container-fluid vh-100 bg-grad px-0"> 
                <div className="container col-md-6 vh-100 holder">
                <div className="text-light pb-5 content">
                    <div className="container text-center">
                        
                        <h1 className="display-4 mt-3 hand-written">Chat<span className="font-weight-bold">Buddy</span></h1>
                        <p className="small mb-3">Connent with peoples all over the world !</p>
                        <input type="text" name="username" value={this.state.username} placeholder={this.state.placeHolder} onChange={this.handleChange}
                            className="my-3 form-control mx-auto col-md-6">
                        </input>
                        <button className="btn btn-outline-light btn-lg hand-written mt-3" onClick={this.handleSubmit}>Start Chatting</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
