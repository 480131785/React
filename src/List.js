import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                   {
                    this.props.list.map(item=>{
                    return <li key={item.id}>{item.name}---{item.age}</li>
                    })
                }
            </div>
        )
    }
}
