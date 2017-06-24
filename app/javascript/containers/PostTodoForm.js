import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requestPostTodo } from '../actions/todo'

const submit = (params, dispatch) => {
  dispatch(requestPostTodo(params));
}

let PostTodoForm = props => {
  const { handleSubmit, dispatch } = props
  return (
    <form onSubmit={ handleSubmit(submit) }>
      <div>
        <Field name="text" component="input" type="text" onChange={ e => {
          console.log(e.target.value)
          dispatch({type: 'HOGE', hoge: 'hoge'})
        }} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PostTodoForm = reduxForm({
  form: 'PostTodoForm'
})(PostTodoForm)

export default PostTodoForm;
