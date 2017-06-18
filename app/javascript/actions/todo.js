import actionTypes from './actionTypes'

export const fetchTodo = (todos) => ({
  type: actionTypes.FETCH_TODO,
  todos
})

export const requestPostTodo = (params) => ({
  type: actionTypes.POST_TODO_REQUEST,
  payload: { params }
})

export const successPostTodo = (todo) => ({
  type: actionTypes.POST_TODO_SUCCESS,
  todo
})

export const failurePostTodo = (params) => ({
  type: actionTypes.POST_TODO_FAILURE,
  payload: { params }
})

export const setVisibilityFilter = (filter) => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id
})
