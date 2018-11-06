import { ADD_TODO, REMOVE_TODO } from './todos.actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== + payload)
    default:
      return state
  }
}