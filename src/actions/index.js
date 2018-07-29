// selectBook is an Action Creator, it needs to return an Action with a TYPE property

export function selectBook(book){
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}