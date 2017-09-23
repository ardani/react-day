import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';
// import AuthRoute from '../components/auth-route';
import UnauthRoute from '../components/unauth-route';
import Home from '../pages/home';

const App = ({ authenticated }) => (
  <div>
    <Header />
    <main>
      <UnauthRoute authenticated={authenticated} exact path="/" component={Home} />
    </main>
  </div>
);

export default withRouter(connect()(App));
