import { combineReducers } from 'redux';
import messages from './messages-reducers';
import projects from './projects-reducers';
import currentProject from './currentProject-reducers';
import browser from './browser-reducers';

export default combineReducers({
  messages,
  projects,
  currentProject,
  browser,
});