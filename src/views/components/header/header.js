import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ authenticated, signOut }) => (
        <header className="header">
          <div className="container">                       
              <img className="profile-image img-responsive pull-left" src="assets/images/profile.png" alt="James Lee" />
              <div className="profile-content pull-left">
                  <h1 className="name">Fitrina</h1>
                  <h2 className="desc">Junior Front End Developer</h2>   
                  <ul className="social list-inline">                
                      <li><a href="https://plus.google.com/u/0/107939029505998284909"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/fitrina-nur-680b38b0/"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="https://github.com/fitrinanur"><i className="fa fa-github-alt"></i></a></li>                  
                      <li className="last-item"><a href="https://web.facebook.com/nur.fitrina.3"><i className="fa fa-facebook"></i></a></li>                 
                  </ul> 
              </div>
              <a className="btn btn-cta-primary pull-right" href="http://themes.3rdwavemedia.com/" target="_blank"><i class="fa fa-paper-plane"></i> Contact Me</a>              
          </div>
      </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


export default Header;
