import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { knowledge_text } from '../data/knowledge'
import VideoSearch from '../components/videos/VideoSearch'
import { get_api_data } from '../utils/api'

const Knowledge = () => {
  const[videos, set_video_data_list] = useState([]);
  const[loding, setLoading] = useState(true);

  useEffect(() => {
    get_api_data(knowledge_text)
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
      title='개발자에게 좋은 상식'
      description='개발자에게 좋은 상식 영상을 소개합니다.'
    >
      <section id='knowledge' className={page_class}>
        <h2>개발자가 알면 좋은 상식</h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </MainStage>
  )
}

export default Knowledge