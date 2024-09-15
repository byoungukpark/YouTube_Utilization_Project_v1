import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { youtubeText } from '../data/youtube'
import VideoCards from '../components/videos/VideoCards'

const Youtube = () => {
  const[loding, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  const youtube_page_class = loding ? 'isLoading' : 'isLoaded';
  
  return (
    <MainStage 
      title='유튜브 사이트'
      description='유튜브 사이트 튜토리얼 강의입니다.'
    >
      <section id='youtube' className={youtube_page_class}>
        <h2>나만의 유튜브 사이트 만들기</h2>
        <div className='video__inner'>
          <VideoCards videos={youtubeText}/>
        </div>
      </section>
    </MainStage>
  )
}

export default Youtube