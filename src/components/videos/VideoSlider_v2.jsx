import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const VideoSlider_v2 = ({ videos, title, id }) => {
  const [loading, setLoading] = useState(true); 
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

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