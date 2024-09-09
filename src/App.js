import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
import MainStage from './components/section/MainStage'
import Footer from './components/section/Footer'

const App = () => {
  return (
    //BrowserRouter : 나는 가상의 주소를 쓰겠다
    //Routes : 주소의 집합체
    //Route : 각 페이지

    //element = {<Home/>} 이런걸 해당 부분의 내용 - 컴포넌트 라고 함

    <BrowserRouter> 
      <Header />

      <MainStage>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/today' element = {<Today/>}/>
          <Route path='/developer' element = {<Developer/>}/>
          <Route path='/webd' element = {<Webd/>}/>
          <Route path='/website' element = {<Website/>}/>
          <Route path='/gsap' element = {<Gsap/>}/>
          <Route path='/port' element = {<Port/>}/>
          <Route path='/youtube' element = {<Youtube/>}/>
          <Route path='/channel/:channelID' element = {<Channel/>}/>
          <Route path='/video/:vidioID' element = {<Video/>}/>
          <Route path='/search/:searchID' element = {<Search/>}/>
          <Route path='/*' element = {<Not/>}/>
        </Routes>
      </MainStage>

      <Footer />
    </BrowserRouter>
  )
}

export default App