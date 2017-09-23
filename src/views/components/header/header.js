import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <img className="profile-image img-responsive pull-left" src="assets/images/profile.png" alt="James Lee" />
      <div className="profile-content pull-left">
        <h1 className="name">Fitrina</h1>
        <h2 className="desc">Junior Front End Developer</h2>
        <ul className="social list-inline">
          <li><a href="https://plus.google.com/u/0/107939029505998284909"><i className="fa fa-google-plus" /></a></li>
          <li><a href="https://www.linkedin.com/in/fitrina-nur-680b38b0/"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://github.com/fitrinanur"><i className="fa fa-github-alt" /></a></li>
          <li className="last-item"><a href="https://web.facebook.com/nur.fitrina.3"><i className="fa fa-facebook" /></a>
          </li>
        </ul>
      </div>
      <a className="btn btn-cta-primary pull-right" href="http://themes.3rdwavemedia.com/"><i className="fa fa-paper-plane" /> Contact Me</a>
    </div>
  </header>
);

export default Header;
