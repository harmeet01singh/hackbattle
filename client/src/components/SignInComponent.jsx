import React from 'react'

export default function SignInComponent() {
    return (
        <div className="container p-5 ">
            <form className="border border-secondary rounded bg-white ">
            <h3 className="px-2 pt-3 pd-1 text-center">Create Your account by Signing In</h3>
            <hr className="w-100"></hr>
            {/*1*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Name</label>
                <input type="text" className="form-control col-8" />
            </div>
            {/*2*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Email</label>
                <input type="email" className="form-control col-8" />
            </div>
            {/*3*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Password</label>
                <input type="password" className="form-control col-8" />
            </div>
            {/*4*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Gender</label>
                <div class="form-check col-sm-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check col-sm-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
            </div>
            {/*5*/}
            <div class="row p-3 m-2">
                <label for="" className="col-4">Upload Profile Image</label>
                <input type="file" class="form-control-file col-8" />
            </div>
            {/*6*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Phone Number</label>
                <input type="number" className="form-control col-8" />
            </div>
            {/*7*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Address</label>
                <input type="text" className="form-control col-8" />
            </div>
            {/*8*/}
            <div className='row p-3 m-2'>
                <label for="" className='col-4'>Bio</label>
                <textarea className="form-control col-8" rows="3"></textarea>
            </div>
            {/*submit button*/}
            <div className='row p-3 justify-content-center'>
                <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
            </form>
        </div>
    )
}
