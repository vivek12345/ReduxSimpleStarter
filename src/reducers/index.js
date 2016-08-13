import { combineReducers } from 'redux';
import ReducerPost from './reducer_post';

const rootReducer = combineReducers({
	posts: ReducerPost
});

export default rootReducer;
