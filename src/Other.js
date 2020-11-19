import React, { Component } from 'react'
import Two from './Two'
import One from './One'

export default class Other extends Component {
    render() {
        return (
            <div>
              <Two/>
              <One/>
            </div>
        )
    }
}
