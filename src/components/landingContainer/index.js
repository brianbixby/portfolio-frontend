import React from 'react';
import { connect } from 'react-redux';

import { projectsFetchRequest } from '../../actions/project-actions.js';
import { logError } from './../../lib/util.js';
import Tile from '../tile';

class LandingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentWillMount() {
    this.props.projectsFetch()
      .catch(err => logError(err));
  }

  render() {
    let bb = require('./../assetts/bracketBusters.png');
    // let projects = [{name: 'Bracket Busers', desc: 'NBA Pick em site', image: bb}, {name: 'Bracket Busers', desc: 'NBA Pick em site', image: bb}, {name: 'Bracket Busers', desc: 'NBA Pick em site', image: bb}];
    let { projects } = this.props;
    return(
      <div className='pageContent'>
        <div className='headline'>
          <div className='container'>
            <div className='descContainer'>
              <p className='name'>Brian Bixby </p>
              <p className='title'>Fullstack Javascript Developer</p>
            </div>
          </div>
        </div>

        <div className='tileContainer'>
          {projects.map((project, idx) => {
            return <div className='tileOuter' key={idx}>
              <Tile project={project} />
            </div>
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  projects: state.projects,
});

let mapDispatchToProps = dispatch => ({
  projectsFetch: () => dispatch(projectsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);