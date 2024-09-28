import React from 'react'
import MainStage from '../components/section/MainStage'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'
import Welcome from '../components/contents/Welcome_text'
import VideoSlider_home from '../components/videos/VideoSlider_home'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer';
import { todayText } from '../data/today'
import { test01_text } from '../data/test01'

const Home = () => {
  return (
    <MainStage 
      title='19컴공 유튜브 개발일지'
      description='19컴공 유튜브 개발일지에 오신것을 환영합니다'
    >
      <Welcome />
      <Today videos={todayText} id="today"/>
      <Developer videos={developerText} title="😪 추천 개발자를 소개합니다." id="developer" />
      <VideoSlider videos={webdText} title="😮 따라하는 코딩 추천 유튜브 영상" id="webd" />

      <VideoSlider_home data={test01_text} title="개발자가 알면 좋은 상식 영상 추천" id="today"/>

      <VideoSlider videos={websiteText} title="😛 19컴공 개발 블로그를 소개합니다" id="website" />
      <VideoSlider videos={gsapText} title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!" id="gsap" />
      <VideoSlider videos={portfolioText} title="🤗 포트폴리오 만드는 방법을 공유합니다." id="portfolio" />
      <VideoSlider videos={youtubeText} title="😱 지금 이 코딩을 영상으로" id="youtube" />
    </MainStage>
  )
}

export default Home
