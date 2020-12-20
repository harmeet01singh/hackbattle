import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderComponent() {
    return (
        <nav class="px-5 navbar navbar-expand navbar-light bg-dark shadow-lg">
        <Link class="navbar-brand text-light" to="/events">Logo</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link class="nav-link text-light" to="/events">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-light" to="/events">Upcoming Events</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-light" to="/contactus">Contact Us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-light" to="/login">Log In</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-light" to="/signin">Sign In</Link>
                </li>
                {/*<li class="nav-item">
                    <Link class="nav-link text-light" to="/admindash">Admin</Link>
                </li>*/}
            </ul>
        </div>
        </nav>
    )
}


