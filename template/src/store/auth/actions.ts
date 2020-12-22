import type { SigninActionTypes } from "./types";
import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "./types";

const signinRequest = (): SigninActionTypes => {
  return {
    type: SIGNIN,
  };
};

const signinSuccess = (username: string): SigninActionTypes => {
  return {
    type: SIGNIN_SUCCESS,
    payload: {
      authenticated: true,
      username,
    },
  };
};

const signinFailure = (): SigninActionTypes => {
  return {
    type: SIGNIN_FAILURE,
    payload: {
      authenticated: false,
    },
  };
};

// eslint-disable-next-line import/prefer-default-export
export const signin = (
  username: string,
  password: string
): SigninActionTypes => {
  signinRequest();

  // STUB
  return username === password ? signinSuccess(username) : signinFailure();
};
