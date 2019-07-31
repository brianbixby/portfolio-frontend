import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  render() {
    let { project, browser } = this.props;
    const obj1 = {
      bb: require("./../assetts/bb2.webp"),
      c: require("./../assetts/c.webp"),
      chow: require("./../assetts/chow2.webp"),
      si: require("./../assetts/si.webp"),
      tf: require("./../assetts/tf.webp"),
      weather: require("./../assetts/weather.webp")
    };
    const obj2 = {
      bb: require("./../assetts/bb2.png"),
      c: require("./../assetts/c.png"),
      chow: require("./../assetts/chow2.png"),
      si: require("./../assetts/si.png"),
      tf: require("./../assetts/tf.png"),
      weather: require("./../assetts/weather.png")
    };
    let obj = browser === "chrome" ? obj1 : obj2;
    return(
      <Link to={`/project/${project.url}`}>
        <div className='tileWrapper'>
          <img src={obj[project.image]} />
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

let mapStateToProps = state => ({
  browser: state.browser,
});

export default connect(mapStateToProps, null)(Tile);
