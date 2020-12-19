import React from 'react';
// import { Link } from 'react-router-dom';

export default function EventProfile(props) {
    const sponsersDisplay = props.eve.sponsers.map((sponser)=>{
        return (
            <span>
                {sponser} &nbsp; 
            </span>
        );
    });
    return (
        <div className="container-fluid">
            <div className='row p-5'>
                <div className='col-12 border p-3 border-danger'>
                    <h1>{props.eve.name}</h1>
                </div>
                <div className='col-12 p-3'>
                    <div className='row  justify-content-around'>
                        <h6 >Arranged By - {props.eve.organiser}</h6>
                        <h6 >Sponsers - {sponsersDisplay}</h6>
                        <h6 >Type - {props.eve.type}</h6>
                    </div>
                    <div className='row justify-content-between'>
                        <h6 >Start Date - {props.eve.startDate}</h6>
                        <h6 >End Date - {props.eve.endDate}</h6>
                    </div>
                </div>
                <div className='col-12 col-sm-4 p-3 img-fluid'>
                    <img className='img-thumbnail' src="https://1.bp.blogspot.com/-Ctv1m-63Q7Q/TozUCb70gQI/AAAAAAAAAfw/UQk-nUN3NHM/s1600/beautiful+nature+scenery-1.jpg"></img>
                </div>
                <div className='col-12 col-sm-8 p-3'>
                    <h5 className='text-left'>Tagline for event</h5>
                    <hr></hr>
                    <p className="text-left">{props.eve.description}</p>
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
