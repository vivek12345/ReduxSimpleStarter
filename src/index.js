import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCcDF3myDy2ujJ118b3aGsXnm8844sVut0';

const App = () => {
	return <SearchBar />
};

ReactDOM.render(<App />, document.querySelector('.container'));
