import React from 'react'

const Welcome_text = () => {
  return (
    <section>
      <div className='welcome'>
        <div className='title'>
          <h1> YouTube에서 개발에 참고될 영상들을 소개합니다. </h1>
          <span>( 개인적 경험을 기반으로.. )</span>

          <div className='api'>
            <span>Rapid api 무료 요금제를 사용하기에 사용중 페이지가 나오지 않을수 있습니다.</span>
            <span>다음날에 사용 부탁드립니다.</span>
          </div>
        </div>

        <div className='link'>
        <a href="https://github.com/byoungukpark/YouTube_Utilization_Project_v1" target="_blank" rel="noopener noreferrer">
            Git에서 Source 보기
          </a>
          <a href="https://ukpark-00.tistory.com/" target="_blank" rel="noopener noreferrer">
            작성자 블로그 보기
          </a>
        </div>
      </div>
    </section>
  )
}

export default Welcome_text