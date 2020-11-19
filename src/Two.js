import React, { Component } from 'react'
import eventHub from './eventHub'
import EventHub from "./eventHub"

export default class Two extends Component {

    handleChange = () =>{
        EventHub.trigger("chufaOne")
    }

    render() {
        return (
            <div>
                Two
                <button onClick={this.handleChange}>改one</button>
            </div>
        )
    }
}
