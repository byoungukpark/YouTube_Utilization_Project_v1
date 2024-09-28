import React, { useEffect, useState } from 'react'

import VideoSlider_v2 from './VideoSlider_v2'
import { fetchFromAPI } from '../../utils/api'

const VideoSlider_home = ({_data, _title, _id}) => {
  const[video_data_list, set_video_data_list] = useState([]);
  const[loading, set_loading] = useState(true);

  useEffect(() => {
    const fetchAllVideos = async () => {
      set_loading(true);
      try {
        const promises = _data.map(text_data => 
          fetchFromAPI(`videos?part=snippet&id=${text_data.videoId}`)
        );

        const results = await Promise.all(promises);
        const videoData = results.map(result => 
          result.items && result.items.length > 0 ? result.items[0] : null
        ).filter(item => item !== null);

        const format_videoData = make_video_dic(videoData);

        set_video_data_list(format_videoData);
      } catch (error) {
        console.error('Error fetching video details:', error);
      } finally {
        set_loading(false);
      }
    };

    fetchAllVideos();
  }, [_data])

  const make_video_dic = (videoData) => {
    return videoData.map(video => ({
      videoId: video.id,
      img: video.snippet.thumbnails.high.url,
      title: video.snippet.title,
      channelId: video.snippet.channelId,
      channelTitle: video.snippet.channelTitle
    }));
  }

  if(loading){
    return(
      <>
        <p>데이터 불러오는 중</p>
      </>
    )
  }

  return (
    <>
      <VideoSlider_v2 videos={video_data_list} title={_title} id={_id} />
    </>
  )
}

export default VideoSlider_home