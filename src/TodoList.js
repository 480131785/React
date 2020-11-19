import React, { Component } from 'react'
import axios from 'axios'
export default class TodoList extends Component {

    state={
        list:[],
        name:"",
        age:0
    }
    
    componentDidMount(){
        this.getData()
    }

    getData(){
        axios.get("http://localhost:4000/list").then(res=>{
            this.setState({
                list:res.data
            })
        })
    }

    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value,
            [e.target.id]:e.target.value
        })
    }

    add = ()=>{
        axios.post("http://localhost:4000/list",{
            name:this.state.name,
            age:this.state.age
        }).then(res=>{
            this.getData()
            this.setState({
                name:"",
                age:0
            })
        })
    }

    remove = (id) => {
        axios.delete("http://localhost:4000/list/"+id).then(res=>{
            this.getData()
        })
    }

    upDate = (item) => {
        let newValue = prompt("请输入更新的内容",item.name+","+item.age)
        if(newValue){
            let arr = newValue.split(",")
            axios.patch("http://localhost:4000/list/"+item.id,{
                name:arr[0],
                age:arr[1]
            }).then(res=>{
                this.getData()
            })
        }
    }

    blur = () =>{
        let keyword = prompt("请输入查询关键字")
        axios.get(`http://localhost:4000/list?name_like=${keyword}`).then(res=>{
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <input id="name" onChange={this.handleChange} value={this.state.name} type="text" placeholder="请输入用户名"/>
                <input id="age" onChange={this.handleChange} value={this.state.age} type="number" placeholder="请输入年龄"/>
                <button onClick={this.add}>添加数据</button>
                <button onClick={this.blur}>模糊查询</button>
                <ul>
                    {
                        this.state.list.map(item=>{
                        return (
                            <li key={item.id}>
                                {item.name}--{item.age}
                                <button onClick={this.remove.bind(this,item.id)}>删除数据</button>
                                <button onClick={this.upDate.bind(this,item)}>更新数据</button>
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        )
    }
}
