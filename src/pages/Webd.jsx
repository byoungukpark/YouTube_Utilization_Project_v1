import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

// import { webdText } from '../data/webd'
import VideoCards from '../components/videos/VideoCards'

const Webd = () => {
  const[loding, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [])

  const webdPageClass = loding ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='따라하기 좋은 유튜브'
      description='따라하기 좋은 유튜브를 소개합니다.'
    >
      <section id='Webd_page' className={webdPageClass}>
        <h2> 따라하는 코딩 </h2>
        {/* <VideoCards videos = {webdText} /> */}
      </section>
    </MainStage>
  )
}

export default Webd