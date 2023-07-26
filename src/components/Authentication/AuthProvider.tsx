import {useState, useEffect} from "react";
import AuthContext, {AuthCtxDataType} from "./AuthContext";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [authResult, setAuthResult] = useState<AuthCtxDataType>({
    loading: true,
    user: null,
  });
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user != null) {
        console.log(user);
        setAuthResult({
          loading: false,
          user: user,
        });
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authResult,
        setAuthResult,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
