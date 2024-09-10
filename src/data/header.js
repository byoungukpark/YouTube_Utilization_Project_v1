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
import { CiCoffeeCup } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


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
        title: "추천 코딩 유튜버",
        icon:  <CiBoxes />,
        src: "/developer"
    },
    {
        title: "따라하기 좋은 유튜브",
        icon:  <CiBullhorn />,
        src: "/webd"
    },
    {
        title: "개발 일지 블로그",
        icon:  <CiCoffeeCup />,
        src: "/website"
    }
];

export const search_keyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
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
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
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
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
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
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    }
];