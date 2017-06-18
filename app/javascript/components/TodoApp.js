import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import PostTodoForm from '../containers/PostTodoForm'

const TodoApp = () => (
  <div>
    <PostTodoForm />
    <VisibleTodoList />
  </div>
)

export default TodoApp
