import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ authenticated, signOut }) => (
  <header className="header">
    <div className="g-row">
      <div className="g-col">
        <h1 className="header__title">Todo Redux Saga</h1>

        <ul className="header__actions">
          {authenticated ? <li><button onClick={signOut}>Sign out</button></li> : null}
        </ul>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


export default Header;
