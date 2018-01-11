import actions from './actionsList';

export function logoutAction() {
  return {
    type: actions.user.LOGOUT
  };
}
