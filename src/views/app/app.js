import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import AuthRoute from '../components/auth-route';
import UnauthRoute from '../components/unauth-route';
import Home from '../pages/home';

const App = ({ authenticated }) => (
  <UnauthRoute authenticated={authenticated} exact path="/" component={Home} />
);

export default withRouter(connect()(App));
