import React from 'react'
import MainStage from '../components/section/MainStage'

import { developerText } from '../data/developer' 
import { Link } from 'react-router-dom'

const Developer = () => {
  return (
    <MainStage 
      title='추천 코딩 유튜브'
      description='추천 코딩 유튜브 페이지입니다.'
    >
      <section id='developer_page'>
        <h2>추천 개발자 유튜브를 소개합니다</h2>
        <div className='developer__inner'>
          {developerText.map((developer, key) => (
            <div className='developer' key={key}>
              <div className='developer__img play__icon'>
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>
              
              <div className='developer__info'>
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>
    </MainStage>
  )
}

export default Developer