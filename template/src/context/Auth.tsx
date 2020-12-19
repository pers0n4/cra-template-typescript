import React from "react";
import {
  AuthState,
  SigninActionTypes,
  initialAuthState,
  authReducer,
} from "store/auth";

interface IAuthContext {
  state: AuthState;
  dispatch: React.Dispatch<SigninActionTypes>;
}

const initialContext: IAuthContext = {
  state: {
    authenticated: false,
  },
  dispatch: () => {
    throw new Error("AuthContext");
  },
};

export const AuthContext = React.createContext(initialContext);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): IAuthContext => React.useContext(AuthContext);
