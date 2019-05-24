import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import modal from './modal';
import search from './search';
import reviews from './reviews';

export default combineReducers({
  routing: routerReducer,
  search,
  reviews,
  modal
});
