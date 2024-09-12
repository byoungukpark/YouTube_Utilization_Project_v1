import React from 'react'
import MainStage from '../components/section/MainStage'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <MainStage 
      title='19컴공 유튜브 개발일지'
      description='19컴공 유튜브 개발일지에 오신것을 환영합니다'
    >
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gsap />
      <Portfolio />
      <Youtube />
    </MainStage>
  )
}

export default Home
