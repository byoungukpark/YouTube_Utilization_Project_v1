import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { follow_text } from '../data/follow'
import VideoSearch from '../components/videos/VideoSearch'
import { get_api_data } from '../utils/api'

const Follow = () => {
  const[videos, set_video_data_list] = useState([]);
  const[loding, setLoading] = useState(true);

  useEffect(() => {
    get_api_data(follow_text)
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
      title='따라하기 좋은 유튜브'
      description='따라하기 좋은 유튜브를 소개합니다.'
    >
      <section id='follow_page' className={page_class}>
        <h2> 따라하는 코딩 </h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </MainStage>
  )
}

export default Follow