import React, { Component } from 'react'

export default class ChatCard extends Component {
    render() {
        const {chat} = this.props;
        if(chat.username === localStorage.getItem('username')){
            return (
                <div className="row my-3 mx-0" >
                    <div className="col-11 pl-0">
                        <div className="bg-grad text-light p-3 rounded">
                            <div className="hand-written mb-2">{chat.username}</div>
                            <div className="h4 hand-written">{chat.message}</div>
                        </div>
                        <div className="small text-right text-light px-2 mt-1">{chat.date}</div>
                    </div>
                    <div className="col-1 p-0">
                        <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg?`} 
                            className="userimg w-100 h-auto bg-light rounded-pill p-1 mt-1" alt="user-img"></img>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="row my-3 mx-0" >
                    <div className="col-1 p-0">
                        <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg?`} 
                            className="userimg w-100 h-auto bg-light rounded-pill p-1 mt-1" alt="user-img"></img>
                    </div>
                    <div className="col-11 pr-0">
                        <div className="bg-grad text-light p-3 rounded">
                            <div className="hand-written mb-2">{chat.username}</div>
                            <div className="h4 hand-written">{chat.message}</div>
                        </div>
                        <div className="small text-light px-2 mt-1">{chat.date}</div>
                    </div>
                </div>
            )
        }
        
    }
}
