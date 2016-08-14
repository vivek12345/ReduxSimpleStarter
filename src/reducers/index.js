import { combineReducers } from 'redux';
import Authenticate from './authenticate';

const rootReducer = combineReducers({
	authenticated: Authenticate
});

export default rootReducer;
