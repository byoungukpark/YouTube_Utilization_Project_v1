import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/videos/VideoSearch'

import { fetchFromAPI } from '../utils/api'

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = () => {
  const {channelID} = useParams();
  const[channel_detail, set_channel_detail] = useState(null);
  const[channel_video, set_channel_video] = useState([]);
  const[next_page_token, set_next_page_token] = useState(null);
  const[loading, set_loding] = useState(true);

  useEffect(() => {
    const fetch_result = async () => {
      try{
        const data = await fetchFromAPI(`channels?part=snippet&id=${channelID}`);
        set_channel_detail(data.items[0]);

        const video_data = await fetchFromAPI(`search?channelId=${channelID}&part=snippet%2Cid&order=date`);
        set_channel_video(video_data?.items);

        set_next_page_token(video_data?.nextPageToken);
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
      finally{
        set_loding(false);
      }
    }

    if(channelID) fetch_result();
    else console.log("no channelID");
  }, [channelID]);

  const load_more_video = async() => {
    if(next_page_token){
      const video_data = await fetchFromAPI(`search?channelId=${channelID}&part=snippet%2Cid&order=date&pageToken=${next_page_token}`);
      set_channel_video(prevVideos => [...prevVideos, ...video_data.items]);
      set_next_page_token(video_data?.nextPageToken);
    }
  }

  const channel_page_class = loading ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='유튜브 채널'
      description='유튜브 채널페이지입니다.'
    >
      {channel_detail && (
        <section id='channel__page' className={channel_page_class}>
          <div className='channel__header'
            style={{ backgroundImage: `url(${channel_detail.brandingSettings.image.bannerExternalUrl})` }}
          >
            <div className='circle'>
              <img src={channel_detail.snippet.thumbnails.high.url} alt={channel_detail.snippet.title} />
            </div>
          </div>

          <div className='channel__info'>
            <h3 className='title'>{channel_detail.snippet.title}</h3>
            <p className='desc'>{channel_detail.snippet.description}</p>
            <div className='info'>
              <span><CiBadgeDollar />{channel_detail.statistics.subscriberCount}</span>
              <span><CiMedal />{channel_detail.statistics.videoCount}</span>
              <span><CiRead />{channel_detail.statistics.viewCount}</span>
            </div>
          </div>

          <div className='channel__video video__inner search'>
            <VideoSearch videos={channel_video} />
          </div>
          <div className='channel__more'>
              {next_page_token && <button onClick={load_more_video}>더 보기</button>}
          </div>
        </section>
      )}
    </MainStage>
  )
}

export default Channel