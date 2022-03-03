import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo }) => {
  const [loggedInUser] = useContext(UserContext);
  return loggedInUser.email ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
