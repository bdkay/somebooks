// Reducers are only called when actions occurred.
// State argument is not application state, but only the state that this reducer is responsible for

export default function(state = null, action){
  // Don't mutate state here
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}