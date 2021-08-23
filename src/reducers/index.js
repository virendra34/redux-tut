import { combineReducers } from 'redux';
import countReducer from './countReducer';
import isLoggedReducer from './isLoggedReducer'
const allReducer = combineReducers({
    count: countReducer,
    isLogged: isLoggedReducer,
});
export default allReducer
