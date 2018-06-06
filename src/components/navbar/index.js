import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <header>
        <nav>
          <div className='logo'>
              <Link to='/'>BB</Link>
          </div>
        </nav>
    </header>
    );
  }
}

export default Navbar;