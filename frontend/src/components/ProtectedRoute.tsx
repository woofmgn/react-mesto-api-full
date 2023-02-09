import React from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  isLogged: boolean;
  children: React.ReactNode | any;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
  isLogged,
  children,
}) => {
  return isLogged ? children : <Navigate to="/sign-in" />;
};

export { ProtectedRoute };
