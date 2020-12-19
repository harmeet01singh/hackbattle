import React, { Component } from 'react'
import Eventlist from './EventList'
import Eventprofile from './EventProfile'

export default class MainComponent extends Component {
    render() {
        return (
            <div className="full-height">
                {/*<Eventlist/>*/}
                <Eventprofile/>
            </div>
        )
    }
}
