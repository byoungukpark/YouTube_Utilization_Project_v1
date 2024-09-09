import React from 'react'

//아이콘 불러오기
import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const Header = () => {
  return (
    <div>
      <header id='header' role='banner'>
        <h1 className='header__logo'>
          <a href='/'>
            <em aria-hidden='true'></em>
            <span>webs<br />youtube</span>
          </a>
        </h1>

        <nav className='header__menu'>
          <ul className='menu'>
            <li>
              <a href='/'>
                <CiBaseball />19컴공 유튜브 개발 일지
              </a>
            </li>
            <li>
              <a href='/today'>
                <CiCoins1 />추천 영상
              </a>
            </li>
            <li>
              <a href='/developer'>
                <CiBoxes />추천 코딩 유튜버
              </a>
            </li>
            <li>
              <a href='/webd'>
                <CiBullhorn />따라하기 좋은 유튜브
              </a>
            </li>
            <li>
              <a href='/website'>
                <CiCoffeeCup />개발 일지 블로그
              </a>
            </li>
          </ul>

          <ul className='keyword'>
            <li>
                <a href='/search/webstoryboy'>webstoryboy</a>
            </li>
            <li>
                <a href='/search/html'>HTML</a>
            </li>
            <li>
                <a href='/search/css'>CSS</a>
            </li>
            <li>
                <a href='/search/javascript'>JavaScript</a>
            </li>
            <li>
                <a href='/search/react.js'>React.js</a>
            </li>
            <li>
                <a href='/search/vue.js'>Vue.js</a>
            </li>
            <li>
                <a href='/search/next.js'>Next.js</a>
            </li>
            <li>
                <a href='/search/node.js'>Node.js</a>
            </li>
            <li>
                <a href='/search/sql'>SQL</a>
            </li>
            <li>
                <a href='/search/React Portfolio'>portfolio</a>
            </li>
            <li>
                <a href='/search/NewJeans'>music</a>
            </li>
          </ul>
        </nav>

        <div className='header__sns'>
          <ul>
            <li>
                <a href='https://github.com/byoungukpark/YouTube_Utilization_Project_v1' rel='noopener noreferrer'>
                    <AiFillGithub />
                </a>
            </li>
            <li>
                <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                    <AiFillYoutube />
                </a>
            </li>
            <li>
                <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                    <AiOutlineCodepen />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                    <AiOutlineInstagram />
                </a>
            </li>
          </ul>
        </div>

      </header>
    </div>
  )
}

export default Header
