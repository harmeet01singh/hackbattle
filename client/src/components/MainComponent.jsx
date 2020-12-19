import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import EventList from './EventList';
import EventProfile from './EventProfile';
// import React, { Component } from 'react'
// import Eventlist from './EventList'
// import Eventprofile from './EventProfile'

export default class MainComponent extends Component {
    render() {
        // const EventProfileID = ({match}) => {
        //     return (
        //         <EventProfile id={} />
        //     );
        // }
        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/events' component={EventList} />
                    {/* <Route path="/events/:eventID" component={EventProfileID} /> */}
                    <Redirect to="/events" />
                </Switch>
                <FooterComponent />
            </div>
        )
    }
}
