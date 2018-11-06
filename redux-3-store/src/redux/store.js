// Create your store here!
import { createStore, combineReducers} from 'redux'
import todoReducer from './todos.reducer'

const rootReducer = combineReducer({
  todos: todoReducer
})

export default createStore(rootReducer)