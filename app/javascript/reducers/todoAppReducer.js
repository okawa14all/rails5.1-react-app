import actionTypes from '../actions/actionTypes'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODO:
      return Object.assign([], state, action.todos)
    case actionTypes.POST_TODO_SUCCESS:
      console.log('***** SUCCESS')
      console.log(action.todo)
      return [ action.todo, ...state ]
    case actionTypes.POST_TODO_FAILURE:
      console.log('***** ERROR')
      console.log(action.payload)
      return state
    case 'HOGE':
      console.log('hoge')
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoAppReducer = combineReducers({
  todos,
  visibilityFilter,
  form: formReducer
})

export default todoAppReducer
