import { combineReducers } from 'redux';
import reducer from './weatherData';
import cityReducer from './cities';
// import leads from '.'
export default combineReducers({
    reducer,
    cityReducer
});