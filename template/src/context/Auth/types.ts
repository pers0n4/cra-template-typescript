import { SIGNIN, SIGNIN_FAILURE, SIGNIN_SUCCESS } from "./actions";

export interface User {
  username: string;
}

export interface AuthState {
  authenticated: boolean;
}

export interface SigninRequestAction {
  type: typeof SIGNIN;
}

export interface SigninSuccessAction {
  type: typeof SIGNIN_SUCCESS;
  payload: AuthState & User;
}

export interface SigninFailureAction {
  type: typeof SIGNIN_FAILURE;
  payload: AuthState;
}

export type AuthAction =
  | SigninRequestAction
  | SigninSuccessAction
  | SigninFailureAction;
