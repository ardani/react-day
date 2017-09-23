import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = () => (
  <div className="g-row">
    <div className="g-col">
      <h1 className="helloPage">Hello This Is Home</h1>
    </div>
  </div>
);

export default withRouter(Home);
