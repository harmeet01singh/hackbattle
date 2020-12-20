import React, {Component} from 'react'

export default class SignInComponent extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
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
                <form className="border border-secondary rounded bg-white " onSubmit={this.handleSubmit}>
                <h3 className="px-2 pt-3 pd-1 text-center">Create Your account by Signing In</h3>
                <hr className="w-100"></hr>
                {/*1*/}
                <div className='row p-3 m-2'>
                    <label for="username" className='col-4'>Email</label>
                    <input type="email" name="username" className="form-control col-8" required/>
                </div>
                <div className='row p-3 m-2'>
                    <label for="password" className='col-4'>Password</label>
                    <input type="password" className="form-control col-8" required/>
                </div>
                {/*2*/}
                <div className='row p-3 m-2'>
                    <label for="name" className='col-4'>Name</label>
                    <input type="text" name="name" className="form-control col-8" required/>
                </div>
                {/*3*/}
                {/*4*/}
                <div className='row p-3 m-2'>
                    <label for="gender" className='col-4'>Gender</label>
                    <div class="form-check col-sm-4">
                        <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male"/>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check col-sm-4">
                        <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female"/>
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                </div>
                {/*5*/}
                <div class="row p-3 m-2">
                    <label for="profile" className="col-4">Upload Profile Image</label>
                    <input type="file" name="profile" className="form-control-file col-8" required/>
                </div>
                {/*6*/}
                <div className='row p-3 m-2'>
                    <label for="contact" className='col-4'>Phone Number</label>
                    <input type="text" name="contact" className="form-control col-8" required/>
                </div>
                {/*7*/}
                <div className='row p-3 m-2'>
                    <label for="address" className='col-4'>Address</label>
                    <input type="text" name="address" className="form-control col-8" required/>
                </div>
                {/*8*/}
                <div className='row p-3 m-2'>
                    <label for="bio" className='col-4'>Bio</label>
                    <textarea name="bio" className="form-control col-8" rows="3" required></textarea>
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
