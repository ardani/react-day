import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UnauthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (authenticated ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location },
      }}
      />
    ) : (
      <Component {...props} />
    ))}
  />
);

export default UnauthRoute;
