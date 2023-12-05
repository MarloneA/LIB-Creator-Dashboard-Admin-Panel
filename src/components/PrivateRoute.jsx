import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthState } from "./context/auth-context";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuthState();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate
            to="/login"
          />
        )
      }
    />
  );
}

export default PrivateRoute;