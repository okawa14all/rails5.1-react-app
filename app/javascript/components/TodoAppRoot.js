import 'regenerator-runtime/runtime'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import TodoApp from './TodoApp'
import todoAppReducer from '../reducers/todoAppReducer'
import { fetchTodo } from '../actions/todo'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  todoAppReducer,
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga)

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
