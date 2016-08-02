import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCcDF3myDy2ujJ118b3aGsXnm8844sVut0';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedVideo: null,
			videos: []
		};
		this.videoSearch('cricket')
	}
	videoSearch(term) {
		YTSearch({key: API_KEY,term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onVideoSearch={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoClick={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
