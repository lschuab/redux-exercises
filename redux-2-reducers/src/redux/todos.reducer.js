import { ADD_TODO, REMOVE_TODO } from './todos.actions'

let initialState = [
  {
    id: 1,
    item: "Apples",
    quantity: 3
  },
  {
    id: 2,
    item: "Oranges",
    quantity: 2
  },
  {
    id: 3,
    item: "Pears",
    quantity: 5
  }
]

// Create your reducer function below

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state;
  }
}