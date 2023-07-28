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
  const {authResult} = useContext<any>(AuthContext);
  const [loading] = useState(localStorage.getItem("uid") === "1");

  //console.log("Admin authentication", AdminAuth());

  if ((loading ?? false) && authResult.loading) {
    return (
      <>
        <Loading />;
      </>
    );
  }

  return AdminAuth() ? <Outlet /> : <Navigate to="/home" />;
};
