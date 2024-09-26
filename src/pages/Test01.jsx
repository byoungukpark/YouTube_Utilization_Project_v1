import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import VideoSlider_v2 from '../components/videos/VideoSlider_v2'
import { test01_text } from '../data/test01'
import { fetchFromAPI } from '../utils/api'

const Test01 = () => {
  const[video_data_list, set_video_data_list] = useState([]);
  const[loading, set_loading] = useState(true);

  useEffect(() => {
    const fetchAllVideos = async () => {
      set_loading(true);
      try {
        const promises = test01_text.map(text_data => 
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
  }, [])

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
      <MainStage 
        title='test01'
        description='test01'
      >
        로딩중!
      </MainStage>
    )
  }

  return (
    <MainStage 
      title='test01'
      description='test01'
    >
      <VideoSlider_v2 videos={video_data_list} title="썸네일 테스트 페이지 영상" id="website" />

    </MainStage>
  )
}

export default Test01
