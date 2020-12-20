import React, { Component } from 'react';
import {USERS} from './users';
import {EVENTS} from './events';

export default class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: USERS,
            events: EVENTS
        }
    }
    shiftToEvents(){
        document.getElementById('tableUsers').classList.add('d-none');
        document.getElementById('tableEvents').classList.remove('d-none');
    
    }
    shiftToUsers(){
        document.getElementById('tableEvents').classList.add('d-none');
        document.getElementById('tableUsers').classList.remove('d-none');
    
    }
    renderUserData(row){
        return(
            <tr>
                <td scope="row">{row._id}</td>
                <td scope="row">{row.profile}</td>
                <td scope="row">{row.name}</td>
                <td scope="row">{row.username}</td>
                <td scope="row">{row.contact}</td>
                <td scope="row">{row.address}</td>
                <td scope="row">{row.bio}</td>
            </tr>
        );
    }
    renderEventData(row){
        return(
            <tr>
                <td scope="row">{row._id}</td>
                <td scope="row">{row.name}</td>
                <td scope="row">{row.organiser}</td>
                <td scope="row">{row.ngo}</td>
                <td><a class="btn btn-danger" id={row._id}>Delete</a></td>
            </tr>
        );
    }
    render(){
        const userData = this.state.users.map((row) => {
            return this.renderUserData(row);
        });
        const eventData = this.state.events.map((row) => {
            return this.renderEventData(row);
        });
        return (
            <div className='row'>
                <nav className="col col-md-2  bg-light full-height border shadow-lg m-0">
                <div className="sidebar-sticky ">
                    <ul className="nav flex-column">
                    <li className="nav-item m-3 ml-3">
                        <a className="nav-link btn btn-primary" onClick={this.shiftToUsers}>
                            Users
                        </a>
                    </li>
                    <li className="nav-item m-3 ml-3">
                        <a className="nav-link btn btn-primary" onClick={this.shiftToEvents} >
                            Events
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
                <div className='col col-md-10 bg-light full-height p-3' id='tableUsers'>
                <div className='table-responsive'>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Bio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <div className='col col-md-10 bg-light full-height p-3 d-none' id='tableEvents'>
                    <div className='table-responsive'>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Organiser</th>
                                <th scope="col">NGO</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eventData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
