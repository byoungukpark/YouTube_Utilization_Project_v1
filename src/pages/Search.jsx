import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'
import { useParams } from 'react-router-dom'

import VideoSearch from '../components/videos/VideoSearch'

const Search = () => {
  const {searchID} = useParams();
  const[videos, set_videos] = useState([]);

  useEffect(() => {
    console.log("searchID :" + searchID);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then(response => response.json())
    .then(result => {
      console.log(result);
      set_videos(result.items);
    })
    .catch(error => console.log(error));
  }, [searchID]);

  return (
    <MainStage 
      title='유튜브 검색'
      description='유튜브 검색 결과 페이지입니다.'
    >
      <section id='search_page'>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </MainStage>
  )
}

export default Search