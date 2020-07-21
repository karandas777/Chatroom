import React, { Component } from 'react'

export default class ChatCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             date:false,
        }
    }


    funToggleDate = () =>{
        this.setState({date:!this.state.date});
    }
    

    render() {
        const {chat} = this.props;
        if(chat.username === localStorage.getItem('username')){
            return (
                <div className="row my-4 mx-0" >
                    <div className="col-11 pl-0 text-right">
                        <div className="bg-light shadow text-dark text-left p-2 rounded-lg d-inline-block" onClick={this.funToggleDate}>
                            <div className="h6 my-0">{chat.message}</div>
                        </div>
                        {
                            this.state.date ? (<div className="small text-primary text-right px-2 mt-2">Sent by {chat.username} on {chat.date}</div>) : null
                        }
                    </div>
                    <div className="col-1 p-0">
                        <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg`} 
                            className="w-100 h-auto bg-dark rounded-pill p-1" alt="user-img"></img>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="row my-4 mx-0" >
                    <div className="col-1 p-0">
                        <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg`} 
                            className="w-100 h-auto bg-dark rounded-pill p-1" alt="user-img"></img>
                    </div>
                    <div className="col-11 pr-0">
                        <div className="bg-light shadow text-dark p-2 rounded-lg d-inline-block" onClick={this.funToggleDate}>
                            <div className="h6 my-0">{chat.message}</div>
                        </div>
                        {
                            this.state.date ? (<div className="small text-primary px-2 mt-2">Sent by {chat.username} on {chat.date}</div>) : null
                        }
                    </div>
                </div>
            )
        }
        
    }
}
