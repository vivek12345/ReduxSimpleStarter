import {
	FETCH_USERS
} from './types';
import axios from 'axios';

const request = axios.get('https://jsonplaceholder.typicode.com/users');

export function fetchUsers() {
	return {
		type: FETCH_USERS,
		payload: request
	}
}
