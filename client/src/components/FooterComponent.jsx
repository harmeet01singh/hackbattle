import React from 'react'

export default function FooterComponent() {
    return (
        <div class="container-fluid footer bg-dark text-light">
            <div className="row p-4 m-0">
                <div className="col-12 col-sm-4 p-2">
                    <a href="#" className="text-light">Organize Event</a>
                </div>
                <div className="col-12 col-sm-4 p-2">
                    <a href="#" className="text-light">See Upcoming Events</a>
                </div>
                <div className="col-12 col-sm-4 p-2">
                    <a href="#" className="text-light">Contact us</a>
                </div>
            </div>
        </div>
    )
}
