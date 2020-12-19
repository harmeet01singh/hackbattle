import React, { Component } from 'react'

export default class OrganizerComponent extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) =>{
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
            <div className="container p-5">
                <form className="border border-secondary" onSubmit={this.handleSubmit}>
                <h3 className="px-2 pt-3 pd-1 text-center">Organize Event</h3>
                <hr className="w-100"></hr>
                {/*1*/}
                <div className='row p-3 m-2'>
                    <label for="eventName" className='col-4'>Event Name</label>
                    <input type="text" name="eventName" className="form-control col-8" 
                    required/>
                </div>
                {/*2*/}
                <div className='row p-3 m-2'>
                    <label for="ngoName" className="col-4">NGO Name</label>
                    <input type="text" name="ngoName" className="form-control col-8" required/>
                </div>
                {/*3*/}
                <div className='row p-3 m-2'>
                    <label for="startDate" className='col-4'>Start Date</label>
                    <input type="date" name="startDate" className="form-control col-8" required/>
                </div>
                {/*4*/}
                <div className='row p-3 m-2'>
                    <label for="endDate" className='col-4'>End Date</label>
                    <input type="date" name="endDate" className="form-control col-8" required/>
                </div>
                {/*5*/}
                <div className='row p-3 m-2'>
                    <label for="startTime" className='col-4'>Start Time</label>
                    <input type="time" name="startTime" className="form-control col-8" required/>
                </div>
                {/*6*/}
                <div className='row p-3 m-2'>
                    <label for="endTime" className='col-4'>End Time</label>
                    <input type="time" name="endTime" className="form-control col-8" required/>
                </div>
                {/*7*/}
                <div className='row p-3 m-2'>
                    <label for="address" className='col-4'>Address</label>
                    <input type="text" name="address" className="form-control col-8" required/>
                </div>
                {/*8*/}
                <div className='row p-3 m-2'>
                    <label for="type" className='col-4'>Type</label>
                    <input type="text" name="type" className="form-control col-8" required/>
                </div>
                {/*9*/}
                <div className='row p-3 m-2'>
                    <label for="description" className='col-4'>Description</label>
                    <textarea name="description" className="form-control col-8" rows="3" required></textarea>
                </div>
                {/*10*/}
                {/*Facebook*/}
                <div className='row p-3 m-2'>
                    <label for="fbProf" className='col-4'>Facebook profile of NGO</label>
                    <input type="link" name="fbProf" className="form-control col-8" required/>
                </div>
                {/*instagram*/}
                <div className='row p-3 m-2'>
                    <label for="InstaProf" className='col-4'>Instagram profile of NGO</label>
                    <input type="link" name="InstaProf" className="form-control col-8" required/>
                </div>
                {/*twitter*/}
                <div className='row p-3 m-2'>
                    <label for="twitterProf" className='col-4'>Twitter profile of NGO</label>
                    <input type="link" name="twitterProf" className="form-control col-8" required/>
                </div>
                {/*11*/}
                <div className='row p-3 m-2'>
                    <label for="sponsers" className='col-4'>Sponsers</label>
                    <input type="text" name="sponsers" className="form-control col-8" required/>
                </div>
                {/*12*/}
                <div class="row p-3 m-2">
                    <label for="image" className="col-4">Select Image file</label>
                    <input type="file" name="image" class="form-control-file col-8" required/>
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
