import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { gituse_text } from '../data/gituse'
import VideoSearch from '../components/videos/VideoSearch'
import { get_api_data } from '../utils/api'

const Gituse = () => {
  const[videos, set_video_data_list] = useState([]);
  const[loding, setLoading] = useState(true);

  useEffect(() => {
    get_api_data(gituse_text)
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
      title='git 사용법'
      description='git 사용법을 알려주는 영상을 소개합니다.'
    >
      <section id='gituse' className={page_class}>
        <h2>Git 사용법</h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </MainStage>
  )
}

export default Gituse