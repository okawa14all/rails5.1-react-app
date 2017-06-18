import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { addTodo } from '../actions/todo'

const submit = (params, dispatch) => {
  dispatch(addTodo(params));
}

let PostTodoForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit(submit) }>
      <div>
        <Field name="text" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PostTodoForm = reduxForm({
  form: 'PostTodoForm'
})(PostTodoForm)

export default PostTodoForm;
