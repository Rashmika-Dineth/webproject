import {createContext} from "react";
import {User} from "firebase/auth";

export type AuthCtxDataType =
  | {loading: boolean; user: null}
  | {loading: boolean; user: User};

interface IAuthContext {
  authResult: AuthCtxDataType;
  setAuthResult: (authData: AuthCtxDataType) => void;
}

const contextValue = {
  authResult: {loading: true, user: null},
  setAuthResult: (authData: AuthCtxDataType) => {},
};

const AuthContext = createContext<IAuthContext>(contextValue);

export default AuthContext;
