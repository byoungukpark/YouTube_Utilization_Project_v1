import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { format_api_data } from '../../utils/api'

const VideoSlider_v2 = ({ data, title, id }) => {
  const[videos, set_video_data_list] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    format_api_data(data)
    .then((format_data) => {
      set_video_data_list(format_data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [data]);

  const youtubeClass = loading ? 'isLoading' : 'isLoaded';
  
  return (
    <section id={id} className={youtubeClass}>
      <h2>{title}</h2>
      <div className='video__slider'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper-${id}`}
          breakpoints={{    
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((video, key) => (
            <SwiperSlide key={key}>
              <div className='video__inner__slide'>
                <div className="video" key={key}>
                  <div className="video__thumb play__icon">
                    <Link to={`/video/${video.videoId}`}>
                      <img src={video.img} alt={video.title} />
                    </Link>
                  </div>
                
                  <div className='video__info'>
                    <div className='title'>
                        <Link to={`/video/${video.videoId}`}>{video.title}</Link>
                    </div>

                    <div className="info">
                      <span className="author">
                        <Link to={`/channel/${video.channelId}`}>{video.channelTitle}</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}


export default VideoSlider_v2