import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'
import { Link, useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/api'

import ReactPlayer from 'react-player';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";


const Video = () => {
  const {videoID} = useParams();
  const[video_detail, set_video_detail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log("videoID : " + videoID)
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoID}`)
    .then((data) => {
      if (data.items && data.items.length > 0) {
        set_video_detail(data.items[0]);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.error('Error fetching video details:', error);
      setIsLoading(false);
    });
  }, [videoID])


  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!video_detail) {
    return <div>비디오를 찾을 수 없습니다.</div>;
  }

  return (
    <MainStage 
      title='유튜브 비디오 영상'
      description='유튜브 비디오 영상'
    >
      <section id='video_view_page'>
        <div className='video__view'>
          <div className='video__play'>
            <ReactPlayer 
              playing={true}
              url={`https://www.youtube.com/watch?v=${videoID}`} 
              width='100%' 
              height='100%' 
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>

          <div className='video__info'>
            <h2 className='video__title'>
              {video_detail.snippet.title}
            </h2>

            <div className='video__channel'>
              <div className='id'>
                <Link to='/channel/'>{video_detail.snippet.channelTitle}</Link>
              </div>

              <div className='count'>
                <span className='view'><CiRead />{video_detail.statistics.viewCount}</span>
                <span className='like'><CiStar />{video_detail.statistics.likeCount}</span>
                <span className='comment'><CiChat1 />{video_detail.statistics.commentCount}</span>
              </div>
            </div>

            <div className='video__desc'>
              {video_detail.snippet.description}
            </div>
          </div>
        </div>
      </section>
    </MainStage>
  )
}

export default Video