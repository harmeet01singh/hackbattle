import React from 'react'

export default function LogInComponent() {
    return (
        <div className="container p-5 ">
            <form className="border border-secondary rounded bg-white ">
            <h3 className="px-2 pt-3 pd-1 text-center">Create Your account by Signing In</h3>
            <hr className="w-100"></hr>
            {/*1*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Email</label>
                <input type="email" className="form-control col-8" />
            </div>
            {/*2*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Password</label>
                <input type="password" className="form-control col-8" />
            </div>
            {/*submit button*/}
            <div className='row p-3 justify-content-center'>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    )
}
