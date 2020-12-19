import React from 'react'

export default function OrganizerComponent() {
    return (
        <div className="container p-5">
            <form className="border border-secondary">
            <h3 className="px-2 pt-3 pd-1 text-center">Organize Event</h3>
            <hr className="w-100"></hr>
            {/*1*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Event Name</label>
                <input type="text" className="form-control col-8" />
            </div>
            {/*2*/}
            <div className='row p-3 m-2'>
                <label for="" className="col-4">NGO Name</label>
                <input type="text" className="form-control col-8"/>
            </div>
            {/*3*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Start Date</label>
                <input type="date" className="form-control col-8" />
            </div>
            {/*4*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>End Date</label>
                <input type="date" className="form-control col-8" />
            </div>
            {/*5*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Start Time</label>
                <input type="time" className="form-control col-8" />
            </div>
            {/*6*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>End Time</label>
                <input type="time" className="form-control col-8" />
            </div>
            {/*7*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Address</label>
                <input type="text" className="form-control col-8" />
            </div>
            {/*8*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Type</label>
                <input type="text" className="form-control col-8" />
            </div>
            {/*9*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Description</label>
                <textarea className="form-control col-8" rows="3"></textarea>
            </div>
            {/*10*/}
            {/*Facebook*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Facebook profile of NGO</label>
                <input type="link" className="form-control col-8" />
            </div>
            {/*instagram*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Instagram profile of NGO</label>
                <input type="link" className="form-control col-8" />
            </div>
            {/*twitter*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Twitter profile of NGO</label>
                <input type="link" className="form-control col-8" />
            </div>
            {/*11*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Sponsers</label>
                <input type="email" className="form-control col-8" />
            </div>
            {/*12*/}
            <div class="row p-3 m-2">
                <label for="" className="col-4">Select Image file</label>
                <input type="file" class="form-control-file col-8" />
            </div>
            {/*submit button*/}
            <div className='row p-3 justify-content-center'>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    )
}
