import React from 'react'


export default function HeaderComponent() {
    return (
        <nav class="navbar navbar-expand navbar-light bg-dark">
        <a class="navbar-brand text-light" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">Upcoming Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">contact us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">Log In</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">Sign In</a>
                </li>
            </ul>
        </div>
        </nav>
    )
}
