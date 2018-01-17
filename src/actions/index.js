export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action
  // i.e. an object with a "type" property and a payload of some sort
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
