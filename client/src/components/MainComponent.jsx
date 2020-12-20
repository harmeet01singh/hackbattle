import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EventList from './EventList';
import EventProfile from './EventProfile';
import {EVENTS} from './events';
import SignIn from './SignInComponent';
import LogIn from './LogInComponent';
import ContactUs from './ContactUsComponent';
import Organizer from './admin/OrganizeComponent';
import AdminDash from './admin/AdminDashboard';
// import React, { Component } from 'react'
// import Eventlist from './EventList'
// import Eventprofile from './EventProfile'

export default class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: EVENTS
        }
    }
    render() {
        const EventProfileID = ({match}) => {
            return (
                <EventProfile eve={this.state.events.filter((eve) => eve._id === match.params.eventID)[0]} />
            );
        }
        return (
            <div className="full-height bg-banner-1">
                <Switch>
                    <Route exact path='/events' component={() => <EventList events={this.state.events}/>} />
                    <Route exact path="/events/:eventID" component={EventProfileID} />
                    <Route exact path='/contactus' component={ContactUs} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/login' component={LogIn} />
                    {/*Admin Paths*/}
                    <Route exact path='/admindash' component={AdminDash} />
                    <Route exact path='/organizer' component={Organizer} />
                    <Redirect to="/events" />
                </Switch>
            </div>
        )
    }
}
