import {Navigate, Outlet} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../Authentication/AuthContext";

import Loading from "../../Pages/Loading";
import AdminAuth from "../Authentication/AdminAuth";

const PrivateRoutes = () => {
  const {authResult} = useContext<any>(AuthContext);
  const [loading] = useState(localStorage.getItem("logggedStatus") === "1");

  if ((loading ?? false) && authResult.loading) {
    return (
      <>
        <Loading />;
      </>
    );
  }

  return authResult?.user?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

export const AdminRoutes = () => {
  const admin = AdminAuth();

  const {authResult} = useContext<any>(AuthContext);
  const [loading] = useState(localStorage.getItem("logggedStatus") === "1");

  if (((loading ?? false) && authResult.loading) || admin === true) {
    return (
      <>
        <Loading />;
      </>
    );
  } else {
    return authResult?.user?.accessToken && admin === 1 ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  }
};
