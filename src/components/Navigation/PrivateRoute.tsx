import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../Authentication/AuthContext";

import Loading from "../../Pages/Loading";

const PrivateRoutes = () => {
  const {authResult} = useContext<any>(AuthContext);

  if (authResult?.loading) {
    return <Loading />;
  }

  return authResult?.user?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
