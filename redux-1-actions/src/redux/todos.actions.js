export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Your job is to write two action creators:

export const addTodo = (newTodo) => {
  const action = {
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      title: newTodo
    }
  }
  return action
}

export const removeTodo = (id) => {
  const action = {
    type: REMOVE_TODO,
    payload: id
  }
  return action
}