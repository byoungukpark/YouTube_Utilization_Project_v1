import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { jsstudy_text } from '../data/jsstudy'
import VideoSearch from '../components/videos/VideoSearch'
import { get_api_data } from '../utils/api'

const Jsstudy = () => {
  const[videos, set_video_data_list] = useState([]);
  const[loding, setLoading] = useState(true);

  useEffect(() => {
    get_api_data(jsstudy_text)
    .then((get_data) => {
      set_video_data_list(get_data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  const page_class = loding ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='js 문법'
      description='js 문법을 자세히 설명한 영상을 소개합니다.'
    >
      <section id='jsstudy' className={page_class}>
        <h2>javascript 문법 익히기</h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </MainStage>
  )
}

export default Jsstudy