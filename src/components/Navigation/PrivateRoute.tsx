import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../Authentication/AuthContext";

const PrivateRoutes = () => {
  const {authResult} = useContext<any>(AuthContext);

  return authResult?.user?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
