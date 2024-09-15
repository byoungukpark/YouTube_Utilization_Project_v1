import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { portfolioText } from '../data/portfolio'
import VideoCards from '../components/videos/VideoCards'

const Port = () => {
  const[loding, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  const port_page_class = loding ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='포트폴리오 사이트'
      description='포트폴리오 사이트 튜토리얼 강의입니다.'
    >
      <section id='port_page' className={port_page_class}>
        <h2>나만의 포트폴리오 사이를 만들고 싶다면.</h2>
        <div className='video__inner'>
          <VideoCards videos={portfolioText}/>
        </div>
      </section>
    </MainStage>
  )
}

export default Port