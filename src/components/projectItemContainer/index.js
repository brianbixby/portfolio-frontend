import React from 'react';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import Footer2 from '../footer2';
import { projectsFetchRequest } from '../../actions/project-actions.js';
import { logError, renderIf } from './../../lib/util.js';

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
    window.scrollTo(0, 0);
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
            <div className='scrollWrapper' onClick={() => scrollToComponent(this.ProjectDescriptionWrapper, { offset: 0, align: 'top' })}>
              <div className='iconDiv'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enableBackground="new 0 0 53 20" xml="preserve"><g><polygon points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779"> </polygon></g></svg>
              </div>
            </div>
          </div>
          <div className='projectDescriptionWrapper' ref={(section) => { this.ProjectDescriptionWrapper = section; }}>
            <div className='container'>
              <div className='projectTitleWrapper'>
                <p>{current.name}</p>
              </div>
              <div className='projectDescWrapper'>
                <p> {current.fullDesc} </p>
                {renderIf(current.fullDesc1,
                  <p> {current.fullDesc1} </p>
                )}
                {renderIf(current.fullDesc2,
                  <p> {current.fullDesc2} </p>
                )}
                <p> 
                  <a className="github" href={current.github} rel="noopener noreferrer" target="_blank">Github</a>
                  <a className="site" href={current.site} rel="noopener noreferrer" target="_blank">Site</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer2/>
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