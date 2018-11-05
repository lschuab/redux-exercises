/* 
  Problem #2
  
  Export a reducer that will manages an array of groceries. It must expect the following action types:
    - ADD_CONTACT
    - FETCH_CONTACTS
    - REMOVE_CONTACT
*/

// Theoretically, these action type labels would be imported from an actions file, but we will define them here in this case.
let ADD_CONTACT = 'ADD_CONTACT'
let FETCH_CONTACTS = 'FETCH_CONTACTS'
let REMOVE_CONTACT = 'REMOVE_CONTACT'

// Write your code below this line!

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload]
    case FETCH_CONTACTS:
      return action.payload
    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload)
    default:
      return state
  }
}