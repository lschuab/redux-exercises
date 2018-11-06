import { createStore, combineReducers } from 'redux'
import todoReducer from './todos.reducers'

const rootReducer = combineReducers({
  todos: todoReducer
})

export default createStore(rootReducer)