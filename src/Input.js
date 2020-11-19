import React, { Component } from 'react'

export default class Input extends Component {

   handleChange = (e) =>{
       if(e.keyCode === 13){
           this.props.setList(e.target.value)
           e.target.value = ''
       }
   }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleChange} type="text"/>
            </div>
        )
    }
}
