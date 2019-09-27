import * as APIUtil from  '../util/session_api_util';

const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
const RECEIVE_CURRENT_ERRORS = "RECEIVE_CURRENT_ERRORS";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const recieveErrors = errors => ({
  type: RECEIVE_CURRENT_ERRORS,
  errors,
})

