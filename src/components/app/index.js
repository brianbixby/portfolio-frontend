import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../navbar';
import LandingContainer from '../landingContainer';
import AboutContainer from '../aboutContainer';
import ProjectItemContainer from '../projectItemContainer';

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