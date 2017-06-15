import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import todoAppReducer from '../reducers/todoAppReducer'
import { fetchTodo } from '../actions/todo'

const store = createStore(
  todoAppReducer
)

export default class TodoAppRoot extends Component {
  render() {
    store.dispatch(fetchTodo(this.props.todos))
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}
