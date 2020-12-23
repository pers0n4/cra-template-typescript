import type { AuthState, AuthAction } from "./types";
import { SIGNIN, SIGNIN_FAILURE, SIGNIN_SUCCESS } from "./actions";

export const initialAuthState: AuthState = {
  authenticated: false,
};

export const authReducer = (
  state: AuthState,
  action: AuthAction
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
      throw new Error("AuthAction");
  }
};
