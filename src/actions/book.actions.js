import axios from 'axios';

import actions from './actionsList';

export function fetchBookAction(searchText) {
  return {
    type: actions.book.FETCH,
    payload: axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
  };
}
