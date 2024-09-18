import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'
import { useParams } from 'react-router-dom'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
  const {searchID} = useParams();
  const[videos, set_videos] = useState([]);
  const[next_page_token, set_next_page_token] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    set_videos([]);
    fetch_videos(searchID);
  }, [searchID]);

  const fetch_videos=(query, page_token='') => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${page_token}`)
    .then((data) => {
      set_next_page_token(data.nextPageToken); //다음 검색 토큰 저장
      set_videos((prev_videos) => [...prev_videos, ...data.items]); //이전 검색 영상 + 새로운 검색 영상 합친 배열 새로 만들기
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };

  const handle_load_more=() => {
    if(next_page_token){
      fetch_videos(searchID, next_page_token);
    };
  };

  const search_page_class = loading ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='유튜브 검색'
      description='유튜브 검색 결과 페이지입니다.'
    >
      <section id='search_page' className={search_page_class}>
        <h2> <em>{searchID}</em> 검색 결과 입니다.</h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
        <div className='video__more'>
          {next_page_token && (
              <button onClick={handle_load_more}>더 보기</button>
          )}
        </div>
      </section>
    </MainStage>
  )
}

export default Search