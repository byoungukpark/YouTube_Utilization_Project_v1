import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

// import { gsapText } from '../data/gsap'
import VideoCards from '../components/videos/VideoCards'

const Gsap = () => {
  const[loding, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  const gsap_page_class = loding ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='GSAP 사이트'
      description='GSAP 사이트 튜토리얼 강의입니다.'
    >
      <section id='gsap' className={gsap_page_class}>
        <h2>개발자가 알면 좋은 상식</h2>
        {/* <VideoCards videos={gsapText}/> */}
      </section>
    </MainStage>
  )
}

export default Gsap