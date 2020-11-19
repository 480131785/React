import React, { Component } from 'react'
import List from './List'
import Input from './Input'

export default class Todos extends Component {

    constructor(){
        super()
        this.state={
            list:[
                {id:1,name:"西野七濑",age:18},
                {id:2,name:"齐藤飞鸟",age:20}
            ]
        }
    }

    setList = name =>{
        this.setState({
            list:[...this.state.list,{id:parseInt(Math.random()*10000),name}]
        })
    }

    render() {
        return (
            <div>
                <Input setList={this.setList}/>
                <List list={this.state.list}/>
            </div>
        )
    }
}
