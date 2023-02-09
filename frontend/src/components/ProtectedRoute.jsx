// import React from "react";
// import { Navigate } from "react-router-dom";

// interface IProtectedRouteProps {
//   isLogged: boolean;
//   children: React.ReactNode;
// }

// const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
//   isLogged,
//   children,
// }) => {
//   return isLogged ? children : <Navigate to="/sign-in" />;
// };

// export { ProtectedRoute };

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to="/sign-in" />;
};

export { ProtectedRoute };
