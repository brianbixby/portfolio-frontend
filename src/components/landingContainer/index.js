import React from 'react';

import Tile from '../tile';

class LandingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  render() {
    let projects = [{name: 'Bracket Busers', desc: 'NBA Pick em site', image: './assetts/bracketBusters.png'}, {name: 'Bracket Busers', desc: 'NBA Pick em site', image: './assetts/bracketBusters.png'}, {name: 'Bracket Busers', desc: 'NBA Pick em site', image: './assetts/bracketBusters.png'}];
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

export default LandingContainer;