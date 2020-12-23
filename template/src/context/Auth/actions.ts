import type {
  AuthAction,
  SigninRequestAction,
  SigninFailureAction,
  SigninSuccessAction,
} from "./types";

export const SIGNIN = "auth/SIGNIN";
export const SIGNIN_SUCCESS = "auth/SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "auth/SIGNIN_FAILURE";

const signinRequest = (): SigninRequestAction => {
  return {
    type: SIGNIN,
  };
};

const signinSuccess = (username: string): SigninSuccessAction => {
  return {
    type: SIGNIN_SUCCESS,
    payload: {
      authenticated: true,
      username,
    },
  };
};

const signinFailure = (): SigninFailureAction => {
  return {
    type: SIGNIN_FAILURE,
    payload: {
      authenticated: false,
    },
  };
};

export const signin = (username: string, password: string): AuthAction => {
  signinRequest();

  // STUB
  return username === password ? signinSuccess(username) : signinFailure();
};
