import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "reducers";

const PrivateRoute: FC = (props) => {
  const { children, ...rest } = props;
  const { token } = useSelector((state: AppState) => state.userBehavior);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
