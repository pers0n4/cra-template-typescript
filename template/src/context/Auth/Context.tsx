import * as React from "react";
import type { AuthState, AuthAction } from "./types";
import { authReducer, initialAuthState } from "./reducers";

interface IAuthContext {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
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

export const useAuth = (): IAuthContext => React.useContext(AuthContext);
