import React from 'react'
import {
    inject,
    observer
} from 'mobx-react'
import store from '../../store/index'
// import './style.css'xs

@inject ('store') @observer
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleTodos(type) {
        let { store } = this.props
        switch (type) {
            case 'add':
                store.addTodo('一条新任务')
                break;
            case 'delete':
                store.deleteTodo()
                break;
            case 'reset':
                store.resetTodo()
                break;
            default:
        }
    }
    render() {
        let { store } = this.props
        return(
            <div className='home'>
                <h1>在React中使用mobx</h1>
                <div>{store.time}</div>
                {/* <button onClick={this.handleTodos.bind(this,'add')}>添加一条任务</button>
                <button onClick={this.handleTodos.bind(this,'delete')}>删除一条任务</button>
                <button onClick={this.handleTodos.bind(this,'reset')}>任务重置</button>
                {
                    store.todos.map((ele,index,arr) => {
                        return(
                            <div key={index}>{ele}</div>
                        )
                    })
                } */}
            </div>
        )
    }
}
