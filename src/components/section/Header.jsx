/**
 * 헤더 형식 작업 파일 
 * 
 * 디자인 작업 : 영상7
 * 데이터 작업 : 영상8 - 반복 형식을 없에고 컴포넌트화 시키기
 * 
 * + 개념
 * 리액트에서 리엑트내 페이지 이동은 `Link`를 사용
 * Link에서 a태그의 `src` 같은것은 `to` 사용 
 * 
 * map을 사용하여 형식을 표현할때 key = index 처럼 생각
 * 
 * sns 에서
 * <a href={sns.url} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
 * noopener noreferrer : 보안적 문제 해결
 * aria-label : 자동으로 나오는 타이틀 안보이게 하는 것
 * 
 * 
 * useLocation : 현제 리엑트 페이지 주소 가져로기 위함
 * 
 * 마지막으로 Logo, Menu, Sns 전부 컴포넌트화 /header로 들어감
 * 
 */

import React ,{ useState } from 'react'

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
  const [ isMenuActive, setIsMenuActive ] = useState(false);

  const toggleMenu = () => {
      setIsMenuActive(!isMenuActive);
  }

  return (
    <div>
      <header id='header' role='banner' className={isMenuActive ? 'active' : ''}>
        <Logo toggleMenu={toggleMenu}/>
        <Menu />
        <Sns />
      </header>
    </div>
  )
}

export default Header
