import React, { Component } from 'react'
import Form from './Form';
import firedb from '../firebase';
import { animateScroll } from "react-scroll";
import ChatCard from './ChatCard';

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
            <div className="container-fluid px-1 chat-holder">
                <div className="col-md-6 mx-auto py-5 my-4" id="chatlist">
                    {
                        this.state.messageList && this.state.messageList.map((chat)=>(
                            <ChatCard key={chat.id} chat={chat}/>
                        ))
                    }
                </div>
                <Form/>
            </div>
        )
    }
}
