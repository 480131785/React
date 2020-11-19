import React, { Component } from 'react'
import EventHub from "./eventHub"

export default class One extends Component {

   state={
       color:"red"
   }

   componentDidMount(){
       EventHub.on("chufaOne",()=>{
           this.setState({
               color:"yellow"
           })
       })
   }

    render() {
        return (
            <div style={{color:this.state.color}}>
                One
            </div>
        )
    }
}
