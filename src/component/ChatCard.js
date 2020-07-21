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
                        <div className="bg-grad shadow-lg text-light text-left py-1 px-2 rounded-lg d-inline-block" onClick={this.funToggleDate}>
                            <div className="badge badge-light small mb-2">{chat.username}</div>
                            <div className="h4 p-2 hand-written my-0">{chat.message}</div>
                        </div>
                        {
                            this.state.date ? (<div className="small text-right px-2 mt-2">{chat.date}</div>) : null
                        }
                    </div>
                    <div className="col-1 p-0">
                        <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg?`} 
                            className="userimg w-100 h-auto bg-dark rounded-pill p-1" alt="user-img"></img>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="row my-4 mx-0" >
                    <div className="col-1 p-0">
                        <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg?`} 
                            className="userimg w-100 h-auto bg-dark rounded-pill p-1" alt="user-img"></img>
                    </div>
                    <div className="col-11 pr-0">
                        <div className="bg-grad shadow-lg text-light py-1 px-2 rounded-lg d-inline-block" onClick={this.funToggleDate}>
                            <div className="badge badge-light small mb-2">{chat.username}</div>
                            <div className="h4 p-2 hand-written my-0">{chat.message}</div>
                        </div>
                        {
                            this.state.date ? (<div className="small px-2 mt-2">{chat.date}</div>) : null
                        }
                    </div>
                </div>
            )
        }
        
    }
}
