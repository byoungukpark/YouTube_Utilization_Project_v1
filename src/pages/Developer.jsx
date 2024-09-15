import React, { useEffect, useState } from 'react'
import MainStage from '../components/section/MainStage'

import { developerText } from '../data/developer' 
import { Link } from 'react-router-dom'

const Developer = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const developer_page_class = loading ? 'isLoading' : 'isLoaded';

  return (
    <MainStage 
      title='추천 코딩 유튜브'
      description='추천 코딩 유튜브 페이지입니다.'
    >
      <section id='developer_page' className={developer_page_class}>
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