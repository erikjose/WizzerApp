import { combineReducers } from 'redux';
import query from './query';
import filters from './filters';
import properties from './properties';

export default combineReducers({
  query,
  filters,
  properties,
});
