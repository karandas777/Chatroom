import React, { Component } from 'react';
import firedb from '../firebase';

export default class Form extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             username:localStorage.getItem('username'),
             message:"",
             placeHolder:"Enter message"
        }
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = () => {
        const datex = new Date(Date.now());
        let data = {
            username : this.state.username,
            message : this.state.message,
            date: datex.toDateString() ,
        }
        firedb.child('messages').push(data,err=>{
            if(err){
                console.log(err)
            }
        })
        .then(()=>{
            this.setState({message:""})
        })
    }

    funvalidate = () => {
            if(this.state.message === ""){
                this.setState({placeHolder:"Please enter something!"})
            }
            else{
                this.handleSubmit();
                this.setState({placeHolder:"Enter message"})
            }
    }

    render() {
        return (
            <div className="container-fluid bg-grad-light fixed-bottom shadow px-0 w-100">
                <div className="container py-2">
                    <div className="row">
                        <div className="col-9 pr-0">
                            <textarea placeholder={this.state.placeHolder} name="message" 
                            value={this.state.message} type="text" rows="1" onChange={this.handleChange} 
                            className="form-control inp w-100"></textarea>
                        </div>
                        <div className="col-3">
                            <button className="btn bg-grad-success border-0 text-light w-100 h-100" onClick={this.funvalidate}>
                                <i className="fa fa-send"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
