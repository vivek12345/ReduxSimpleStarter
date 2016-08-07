import axios from 'axios';
const API_KEY = 'd6745fc488af76aa7682c885f8d521ff';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_CITY_DATA = 'FETCH_CITY_DATA';
export function fetchCityData(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	let request = axios.get(url);
	console.log(request);
	return {
		type: FETCH_CITY_DATA,
		payload: request
	};
}
