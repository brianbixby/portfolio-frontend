import React from 'react';
import { connect } from 'react-redux';

import { projectsFetchRequest } from '../../actions/project-actions.js';
import { logError } from './../../lib/util.js';

class projectItemContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { current: '', tries: 0, trans: `translate3d(0px, 0px, 0px)`, };
  }
  componentWillMount() {
    if(!this.props.projects) {
      this.props.projectsFetch()
        .then(() => this._filterCurrent())
        .catch(err => logError(err));
    } else {
      this._filterCurrent();
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  _filterCurrent = () => {
    let { params } = this.props.match;
    let temp = this.props.projects.filter(project => project.url !== params);
    if(temp.length > 0) {
      this.setState({ current: temp[0] });
    } else {
      if(this.state.tries < 3) {
        this.setState({ tries: this.state.tries++ });
        this.props.projectsFetch()
          .then(() => this._filterCurrent());
      }
    }
  };

  handleScroll = e => {
    let scrollTop = window.scrollY/3;
    this.setState({
      trans: `translate3d(0px, ${scrollTop}px, 0px)`
    });
  };

  render() {
    let { current, trans } = this.state;
    return(
      <div className='projectItemContent'>
        <div className='content'>
          <div className='coverImageWrapper'>
            <div className='coverImage' style={{background: `url(${current.image})`, transform: trans}}></div>
          </div>
          <p> project item page </p>
          <p> {current.name} </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(projectItemContainer);