import React from 'react'
import MainStage from '../components/section/MainStage'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'
import Welcome from '../components/contents/Welcome_text'
import VideoSliderV2 from '../components/videos/VideoSliderV2'

import { todayText } from '../data/today'
import { developerText } from '../data/developer'
import { youtubeText } from '../data/youtube'

import { knowledge_text } from '../data/knowledge'
import { follow_text } from '../data/follow'
import { gituse_text } from '../data/gituse'
import { jsstudy_text } from '../data/jsstudy'

const Home = () => {
  return (
    <MainStage 
      title='19컴공 유튜브 개발일지'
      description='19컴공 유튜브 개발일지에 오신것을 환영합니다'
    >
      <Welcome />
      <Today videos={todayText} id="today"/>
      <Developer videos={developerText} title="🤗 추천 개발자를 소개합니다." id="developer" />

      <VideoSliderV2 data={knowledge_text} title="😪 개발자가 알면 좋은 상식" id="Knowledge"/>
      <VideoSliderV2 data={follow_text} title="😮 따라하는 코딩" id="follow" />
      <VideoSliderV2 data={gituse_text} title="😛 Git 사용법" id="gituse" />
      <VideoSliderV2 data={jsstudy_text} title="🤓 javascript 문법 익히기" id="jsstudy" />

      <VideoSlider videos={youtubeText} title="😱 지금 보는 사이트 만들기 - 리엑트, YouTube API 사용법" id="youtube" />
    </MainStage>
  )
}

export default Home
