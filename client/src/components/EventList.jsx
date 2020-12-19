import React from 'react';
import { Link } from 'react-router-dom';

function RenderEvents({eve}){
    return (
        <div className='container-fluid'>
        <div className="row justify-content-center p-5">

            <div className="col col-sm-8 m-3">
                <div className="card border-primary">
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

            
        </div>
    </div>
    );
}

export default function EventList(props) {
    const events = props.events.map((eve) => {
        return (
            <div className="col-12 col-md-4 m-1">
                <RenderEvents eve={eve}/>
            </div>
        );
    });
    return (
        <div className="row">
            {events}
        </div>
    );
}
