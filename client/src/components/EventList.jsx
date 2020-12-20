import React from 'react';
import { Link } from 'react-router-dom';

function RenderEvents({eve}){
    return (
        <div className="col-12 col-md-3 m-3">
            <div className="card justify-content-center">
                <img className="img-fluid" src='https://1.bp.blogspot.com/-Ctv1m-63Q7Q/TozUCb70gQI/AAAAAAAAAfw/UQk-nUN3NHM/s1600/beautiful+nature+scenery-1.jpg'></img>
                <div className='card-body'>
                    <h5 className='card-title'>
                        {eve.name}
                    </h5>
                    <p className="card-text">
                        {eve.description}
                    </p>
                    <Link class="btn btn-primary" to={`/events/${eve._id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
}

export default function EventList(props) {
    const events = props.events.map((eve) => {
        return (
            <RenderEvents eve={eve}/>
        );
    });
    return (
        <div className="container">
            <div className="row justify-content-center">
                {events}
            </div>
        </div>
    );
}
