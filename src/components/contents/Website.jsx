import React from 'react'

import { websiteText } from '../../data/website'
import { Link } from 'react-router-dom'

const Website = () => {
  return (
    <section id='website'>
      <h2> 19컴공 개발 블로그를 소개합니다 </h2>
      <div className='video__inner'>
        {websiteText.map((video, key) => (
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={`video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Website
