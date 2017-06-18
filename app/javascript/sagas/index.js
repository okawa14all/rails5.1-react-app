import { fork, take, put, call } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { successPostTodo, failurePostTodo } from '../actions/todo'
import * as Api from '../services/Api'

function* handlePostTodo() {
  while (true) {
    const action = yield take(actionTypes.POST_TODO_REQUEST)
    const { todo, error } = yield call(Api.postTodo, action.payload)
    if (todo && !error) {
      console.log('##### success')
      console.log(todo)
      yield put(successPostTodo(todo))
    } else {
      console.log('##### failure')
      yield put(failurePostTodo(action.payload.params))
    }
  }
}

export default function* rootSaga() {
  yield fork(handlePostTodo)
}

