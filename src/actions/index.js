import { FETCH_POSTS,ADD_POST,DELETE_POST } from './types';
import Firebase from 'firebase';
import config from '../firebase_config';

const Posts = Firebase.initializeApp(config);

export function fetchPosts() {
	return dispatch => {
		Posts.database().ref().on('value', snapshot => {
			dispatch({
				type: FETCH_POSTS,
				payload: snapshot.val()
			});
		});
	};
};
export function addPost(post) {
	return dispatch => Posts.database().ref().push(post);
};
export function deletePost(key) {
	return dispatch => Posts.database().ref().child(key).remove();
};
