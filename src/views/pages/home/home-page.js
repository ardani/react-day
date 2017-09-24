import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/header';
import About from '../../components/about';
import Contact from '../../components/contact';
import Projects from '../../components/projects';
import Education from '../../components/education';
import Skills from '../../components/skills';
import Languages from '../../components/languages';
import Footer from '../../components/footer';

const Home = () => (
  <div>
    <Header />
    <div className="container sections-wrapper">
      <div className="row">
        <div className="primary col-md-8 col-sm-12 col-xs-12">
          <About />
          <Projects />
          <Contact />
        </div>
        <div className="secondary col-md-4 col-sm-12 col-xs-12">
          <Education/>
          <Skills />
          <Languages />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default withRouter(Home);
