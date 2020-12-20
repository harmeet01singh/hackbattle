import React, { Component } from 'react'

export default class LogInComponent extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin = (event) =>{
        event.preventDefault();
        var data = {};
        for(let i = 0;i < event.target.length; i++){
            if(event.target[i].name != ''){
                data[event.target[i].name] = event.target[i].value
            }
        }
        console.log(data);
    }
    render(){
        return (
            <div className="container p-5 ">
                <form className="border border-secondary rounded bg-white" onSubmit={this.handleLogin}>
                <h3 className="px-2 pt-3 pd-1 text-center">Log In</h3>
                <hr className="w-100"></hr>
                {/*1*/}
                <div className='row p-3 m-2'>
                    <label for="username" className='col-4'>Email</label>
                    <input type="email" name="username" className="form-control col-8" required/>
                </div>
                {/*2*/}
                <div className='row p-3 m-2'>
                    <label for="password" className='col-4'>Password</label>
                    <input type="password" name="password" className="form-control col-8" required/>
                </div>
                {/*submit button*/}
                <div className='row p-3 justify-content-center'>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}
