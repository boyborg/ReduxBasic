import {combineReducers} from 'redux';
import countReducer from './countReducer';
import placeReducer from './placeReducer';
const allReducers = combineReducers({
  count: countReducer,
  places: placeReducer
});

export default allReducers;
