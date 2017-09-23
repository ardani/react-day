import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ authenticated, signOut }) => (
  <header className="header">
    <div className="g-row">
      <div className="g-col">
        <h1 className="header__title">React Day</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};


export default Header;
