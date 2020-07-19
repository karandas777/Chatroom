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
            <div className="container-fluid px-0">
                <Header history={this.props.history} />
                <div className="col-md-6 mx-auto pb-5 mb-4" id="chatlist">
                    {
                        this.state.messageList && this.state.messageList.map((chat)=>(
                            <div className="my-3" key={chat.id}>
                                <div className="bg-light p-3 rounded">
                                    <div className="h6 mb-1">{chat.username}</div>
                                    <div className="h3 mb-0">{chat.message}</div>
                                </div>
                                <div className="small text-right px-2 text-secondary">{chat.date}</div>
                            </div>
                        ))
                    }
                </div>
                <Form/>
            </div>
        )
    }
}
