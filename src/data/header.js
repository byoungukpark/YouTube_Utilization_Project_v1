/**
 * 헤더에 들어갈 내용 데이터
 * 
 * 배열에 객체를 넣은 형태로 들가 있음
 */

//아이콘 불러오기
import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


export const header_menus = [
    {
        title: "19컴공 유튜브 개발 일지",
        icon:  <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon:  <CiCoins1 />,
        src: "/today"
    },
    {
        title: "추천 개발 유튜브",
        icon:  <CiBoxes />,
        src: "/developer"
    },
    {
        title: "따라하기 좋은 유튜브",
        icon:  <CiBullhorn />,
        src: "/follow"
    },
    {
        title: "개발자에게 좋은 상식",
        icon:  <CiDumbbell />,
        src: "/knowledge"
    },
    {
        title: "Git 사용법",
        icon:  <CiFries />,
        src: "/gituse"
    },
    {
        title: "javascript 문법 익히기",
        icon:  <CiMoneyBill />,
        src: "/jsstudy"
    }
];

export const search_keyword = [
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "java 강의",
        src: "/search/java 강의"
    },
    {
        title: "python 강의",
        src: "/search/python 강의"
    },
    {
        title: "자료구조",
        src: "/search/자료구조"
    },
    {
        title: "알고리즘",
        src: "/search/알고리즘"
    },
    {
        title: "블록체인",
        src: "/search/블록체인"
    },
    {
        title: "API 사용법",
        src: "/search/API 사용법"
    },
];

export const sns_link  = [
    {
        title: "github",
        url: "https://github.com/byoungukpark/YouTube_Utilization_Project_v1",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "blog",
        url: "https://ukpark-00.tistory.com",
        icon: <AiOutlineCodepen />
    }
];