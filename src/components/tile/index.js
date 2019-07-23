import React from 'react';
import { Link } from 'react-router-dom';

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  render() {
    let { project } = this.props;
    const bb = require("./../assetts/bb2.webp");
    const c = require("./../assetts/c.webp");
    const chow = require("./../assetts/chow2.webp");
    const si = require("./../assetts/si.webp");
    const tf = require("./../assetts/tf.webp");
    const weather = require("./../assetts/weather.webp");
    return(
      <Link to={`/project/${project.url}`}>
        <div className='tileWrapper'>
          <img src={project.image} />
          <div className='tileInner'>
            <div className='text'>
              <p className='projectName'>{project.name} </p>
              <p className='projectDesc'>{project.shortDesc} </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Tile;
