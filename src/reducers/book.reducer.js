import _ from 'lodash';

import actions from '../actions/actionsList';

const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.book.FETCH:
      return _.chain(action).get('payload.data.items').map('volumeInfo').value();
    default:
      return state;
  }
}
