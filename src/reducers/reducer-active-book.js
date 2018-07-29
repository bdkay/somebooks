// Reducers are only called when actions occurred.
// State argument is not application state, but only the state that this reducer is responsible for

export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
    // Don't mutate state here
    return action.payload;
    
    default:
      return state;
  }
}