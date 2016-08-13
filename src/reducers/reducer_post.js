import { FETCH_POSTS,ADD_POST,DELETE_POST } from '../actions/types';
import _ from 'lodash';
const INITIAL_DATA = [
	{ title: 'Vivek Nayyar' },
	{ title: 'Harry Potter' }
];
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_POSTS:
			return action.payload
		case ADD_POST:
			return [...state, {title:action.payload.title}];
		default: return state;
	}
}
