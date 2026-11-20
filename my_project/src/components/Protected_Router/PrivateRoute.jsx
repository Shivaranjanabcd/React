import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const user = useSelector((state) => {
    return state.userInfo.user;
  });
  if (!user) {
    return <Navigate to="/Protected_Login/" />;
  }

  return <Outlet />;
};
