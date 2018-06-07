import React from 'react';

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  render() {
    let { project } = this.props;
    return(
      <div className='tileInner'>
        <p>{project.name} </p>
        <p>{project.desc} </p>
      </div>
    );
  }
}

export default Tile;