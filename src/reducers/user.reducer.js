import actions from '../actions/actionsList';

const defaultState = {
  name: 'Student'
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.user.LOGOUT:
      return {};
    default:
      return state;
  }
}
