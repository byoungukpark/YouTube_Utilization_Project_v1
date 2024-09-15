import React from 'react'
import MainStage from '../components/section/MainStage'

import { todayText } from '../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
  return (
    <MainStage
      title = '추천 영상'
      description='오늘의 추천 유튜브 영상입니다.'
    >
      <section id='today_page'>
        <h2>오늘의 추천 영상 입니다.</h2>

        {todayText.map((today, key) => (
          <div className='today__inner' key={key}>
            <div className='today__thumb play__icon'>
              <Link to={today.page}>
                <img src={today.img} alt={today.title} />
              </Link>
            </div>

            <div className='today__text'>
              <span className='today'>today!</span>
              <h3 className='title'>
                <Link to={today.page}>
                  {today.title}
                </Link>
              </h3>
              <p className='desc'>{today.desc}</p>
              <div className='info'>
                <span id='author'>
                  <Link to={`/channel/${today.channelId}`}>
                    {today.author}
                  </Link>
                </span>
                <span id='date'>{today.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </MainStage>
  )
}

export default Today
