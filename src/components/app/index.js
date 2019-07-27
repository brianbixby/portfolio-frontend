import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { makeAsyncComponent } from "./../../lib/util.js";
import Navbar from '../navbar';
import LandingContainer from '../landingContainer';

const AboutContainer = makeAsyncComponent(import('../aboutContainer'));
const ProjectItemContainer = makeAsyncComponent(import('../projectItemContainer'));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path='*' component={Navbar} />
          <Route exact path='/' component={LandingContainer} />
          <Route exact path='/about' component={AboutContainer} />
          <Route exact path='/project/:projectName' component={ProjectItemContainer} />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;