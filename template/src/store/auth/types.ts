export interface User {
  username: string;
}

export interface AuthState {
  authenticated: boolean;
}

export const SIGNIN = "auth/SIGNIN";
export const SIGNIN_SUCCESS = "auth/SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "auth/SIGNIN_FAILURE";

interface SigninAction {
  type: typeof SIGNIN;
}

interface SigninSuccessAction {
  type: typeof SIGNIN_SUCCESS;
  payload: AuthState & User;
}

interface SigninFailureAction {
  type: typeof SIGNIN_FAILURE;
  payload: AuthState;
}

export type SigninActionTypes =
  | SigninAction
  | SigninSuccessAction
  | SigninFailureAction;
