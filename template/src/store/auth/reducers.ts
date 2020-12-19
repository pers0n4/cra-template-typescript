import {
  AuthState,
  SigninActionTypes,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "./types";

export const initialAuthState: AuthState = {
  authenticated: false,
};

export const authReducer = (
  state = initialAuthState,
  action: SigninActionTypes
): AuthState => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    default:
      return state;
  }
};
