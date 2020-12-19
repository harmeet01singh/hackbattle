import React from 'react';
// import { Link } from 'react-router-dom';

export default function EventProfile(props) {
    return (
        <div className="container-fluid">
            <div className='row p-5'>
                <div className='col-12 border p-3 border-danger'>
                    <h1>Event Name</h1>
                </div>
                <div className='col-12 p-3'>
                    <div className='row  justify-content-around'>
                        <h6 >Arranged By - </h6>
                        <h6 >Sponsers - </h6>
                        <h6 >Type - </h6>
                    </div>
                    <div className='row justify-content-between'>
                        <h6 >Start Date - </h6>
                        <h6 >End Date - </h6>
                    </div>
                </div>
                <div className='col-12 col-sm-4 p-3 img-fluid'>
                    <img className='img-thumbnail' src="https://1.bp.blogspot.com/-Ctv1m-63Q7Q/TozUCb70gQI/AAAAAAAAAfw/UQk-nUN3NHM/s1600/beautiful+nature+scenery-1.jpg"></img>
                </div>
                <div className='col-12 col-sm-8 p-3'>
                    <h5 className='text-left'>Tagline for event</h5>
                    <hr></hr>
                    <p className="text-left">Description of the Event Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
                <div className='col-12'>
                <div className='row justify-content-around'>
                    <button className="btn btn-warning my-auto" type='button'>Register</button>
                    <button className="btn btn-info my-auto" type='button'>Facebook</button>
                    <button className="btn btn-danger my-auto" type='button'>Instagram</button>
                    <button className="btn btn-primary my-auto" type='button'>Twitter</button>
                </div>
                </div>
            </div>
        </div>
    )
}
