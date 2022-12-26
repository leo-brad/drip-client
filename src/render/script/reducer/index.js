import { combineReducers, } from 'redux';
import contentReducer from './contentReducer';
import instanceReducer from './instanceReducer';
import pkgReducer from './pkgReducer.js';

export default combineReducers({
  content: contentReducer,
  instance: instanceReducer,
  pkg: pkgReducer,
});
