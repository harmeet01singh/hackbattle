import React from 'react';
import Admin from './AdminComponent';
import Organizers from './OrganizersComponent';

function shiftToEvents(){
    document.getElementById('tableUsers').classList.add('d-none');
    document.getElementById('tableEvents').classList.remove('d-none');

}
function shiftToUsers(){
    document.getElementById('tableEvents').classList.add('d-none');
    document.getElementById('tableUsers').classList.remove('d-none');

}
var toggle = 1;

export default function AdminDashboard() {
    return (
        <div className='row'>
            <nav className="col col-md-2  bg-light full-height border shadow-lg m-0">
            <div className="sidebar-sticky ">
                <ul className="nav flex-column">
                <li className="nav-item m-3 ml-3">
                    <a className="nav-link btn btn-primary" onClick={shiftToUsers} href="#">
                        Users
                    </a>
                </li>
                <li className="nav-item m-3 ml-3">
                    <a className="nav-link btn btn-primary" onClick={shiftToEvents} href="#">
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
                            <th scope="col">User Email</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td><a className="btn btn-danger" type='button'>Delete</a></td>
                            </tr>
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
                            <th scope="col">Create</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td><a className="btn btn-primary" type='button'>Create</a></td>
                            <td><a className="btn btn-warning" type='button'>update</a></td>
                            <td><a className="btn btn-danger" type='button'>Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
