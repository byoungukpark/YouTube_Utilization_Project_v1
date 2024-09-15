import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { websiteText } from '../data/website'
import VideoCards from '../components/videos/VideoCards'

const Website = () => {
  const[loding, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  const website_page_class = loding ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='19컴공 개발 일지 블로그'
      description='19컴공 개발일지에 블로그를 소개합니다.'
    >
      <section id='website' className={website_page_class}>
        <h2>19컴공 개발일지에 블로그를 소개합니다.</h2>
        <VideoCards videos={websiteText}/>
        
      </section>
    </MainStage>
  )
}

export default Website