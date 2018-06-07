import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../navbar';
import LandingContainer from '../landingContainer';
import About from '../about';
import ProjectItemContainer from '../projectItemContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path='*' component={Navbar} />
          <Route exact path='/' component={LandingContainer} />
          <Route exact path='/about' component={About} />
          <Route exact path='/project/:projectName' component={ProjectItemContainer} />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;