import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EventList from './EventList';
import EventProfile from './EventProfile';
import { EVENTS } from './events';
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
                <EventProfile eve={this.state.events.filter((eve) => eve._id === parseInt(match.params._id,10))[0]} />
            );
        }
        return (
            <div>
                <Switch>
                    <Route exact path='/events' component={() => <EventList events={this.state.events}/>} />
                    <Route exact path="/events/:eventID" component={EventProfileID} />
                    <Redirect to="/events" />
                </Switch>
            </div>
        )
    }
}
