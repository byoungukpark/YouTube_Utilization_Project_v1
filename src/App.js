import React, { Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainStage from './components/section/MainStage'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Follow = lazy(() => import('./pages/Follow'));
const Gituse = lazy(() => import('./pages/Gituse'));
const Knowledge = lazy(() => import('./pages/Knowledge'));
const Jsstudy = lazy(() => import('./pages/Jsstudy'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
    //BrowserRouter :가상의 주소 사용
    //Routes : 주소 집합체
    //Route : 각 페이지

    <BrowserRouter> 
      <Suspense fallback={<MainStage />}>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/today' element = {<Today/>}/>
          <Route path='/developer' element = {<Developer/>}/>
          <Route path='/follow' element = {<Follow/>}/>
          <Route path='/gituse' element = {<Gituse/>}/>
          <Route path='/knowledge' element = {<Knowledge/>}/>
          <Route path='/jsstudy' element = {<Jsstudy/>}/>
          <Route path='/youtube' element = {<Youtube/>}/>
          <Route path='/channel/:channelID' element = {<Channel/>}/>
          <Route path='/video/:videoID' element = {<Video/>}/>
          <Route path='/search/:searchID' element = {<Search/>}/>
          <Route path='/*' element = {<Not/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App