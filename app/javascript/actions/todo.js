import actionTypes from './actionTypes'

export const fetchTodo = (todos) => ({
  type: actionTypes.FETCH_TODO,
  todos
})

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id
})
