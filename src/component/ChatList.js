import React, { Component } from 'react'
import Form from './Form';
import Header from './Header';
import firedb from '../firebase';
import { animateScroll } from "react-scroll";

export default class ChatList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             messageList:[],
        }
    }

    componentDidMount(){
        this.funVerifyUser();
        this.getMessagelist();
        this.scrollToBottom();
    }

    funVerifyUser=()=>{
        let username = localStorage.getItem('username');
        if (username === "" || username === null || username === undefined){
            this.props.history.push('/');
        }
        else{
            return false;
        }
    }

    getMessagelist = () => {
        firedb.child('messages').on('value', snapshot=>{
            let list = [];

            for(let chat in snapshot.val()){
                let obj = {
                    id:chat,
                    username:snapshot.val()[chat].username,
                    message:snapshot.val()[chat].message,
                    date:snapshot.val()[chat].date,
                }
                list.push(obj);
            }
            this.setState({messageList:list})
        })
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "#chatlist"
        });
    }

    render() {
        return (
            <div className="container-fluid px-1 bg-dark">
                <Header history={this.props.history} />
                <div className="col-md-6 mx-auto py-5 my-4" id="chatlist">
                    {
                        this.state.messageList && this.state.messageList.map((chat)=>(
                            <div className="row my-3 mx-0" key={chat.id}>
                                <div className="col-1 p-0">
                                    <img src={`https://avatars.dicebear.com/api/gridy/${chat.username}.svg?`} 
                                    className="userimg w-100 h-auto bg-light rounded-pill p-1 mt-1" alt="user-img"></img>
                                </div>
                                <div className="col-11 pr-0">
                                    <div className="bg-grad text-light p-3 rounded">
                                        <div className="hand-written mb-2">{chat.username}</div>
                                        <div className="h4 mb-0 hand-written">{chat.message}</div>
                                    </div>
                                </div>
                                <div className="col-12 small text-right text-light px-2 mt-1">{chat.date}</div>
                            </div>
                        ))
                    }
                </div>
                <Form/>
            </div>
        )
    }
}
