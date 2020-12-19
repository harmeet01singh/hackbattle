import React from 'react'

export default function EventList() {
    return (
        <div className='container-fluid'>
            <div className="row justify-content-center p-5">

                <div className="col col-sm-8 m-3">
                    <div className="card border-primary">
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Title Of Event 1
                            </h5>
                            <p className="card-text">
                                Description of Event 1
                            </p>
                            <button className="btn btn-primary" type='button'>View Details</button>
                        </div>
                    </div>
                </div>

                <div class="d-none w-100"></div>
                
            </div>
        </div>
    )
}
