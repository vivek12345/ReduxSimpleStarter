import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoClick}) => {
	const videoList = videos.map((video)=>{
		return <VideoListItem onVideoClick={onVideoClick} key={video.etag} video={video} />
	});
	return (
		<ul className='col-md-4 list-group'>
			{videoList}
		</ul>
	);
}

export default VideoList;
