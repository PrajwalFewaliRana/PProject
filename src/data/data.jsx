import { RiDashboardFill } from "react-icons/ri";
import { CgGames } from "react-icons/cg";
import { FaMoneyCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import img1 from "../assets/marathon.webp";
import img2 from "../assets/boxing.jpg";
import img3 from "../assets/gun.webp";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdDownloadForOffline } from "react-icons/md";
import { PiNumberSquareFourLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { LiaFlag } from "react-icons/lia";
import { MdDateRange } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
export const navbar = [
    {
        id:1,
        icon:<RiDashboardFill/>,
        name:"Dashboard",
        link:"/dashboard"
    },
    {
        id:2,
        icon:<CgGames/>,
        name:"Games",
        link:"#GAME",
    },
    {
        id:3,
        icon:<FaMoneyCheck/>,
        name:"Buy and Sell",
        link:"/buy and sell"
    },
    {
        id:4,
        icon:<FaStar/>,
        name:"Feedback",
    },
    {
        id:5,
        icon:<FaHeart/>,
        name:"Favorite",
    },
    {
        id:6,
        icon:<IoSettingsSharp/>,
        name:"Settings",
    },
]

export const GamesApi = [
    {
        id:1,
        title:"Marathon",
        text:"In this game we need to run a marathon in which...",
        img:img1,
        link:"/marathon",
    },
    {
        id:2,
        title:"Boxing",
        text:"This is One vs one boxing battle which can be multiplayer...",
        img:img2,
        link:"/boxing",
    },
    {
        id:3,
        title:"Stretching",
        text:"This game is like a gun game but there is one twist...",
        img:img3,
        link:"/stretching",
    },
]
export const ratings = [
    {
        id:1,
        data:"4.5",
        icon:<FaStar />,
        text:"21M reviews",
        icon2:<AiOutlineExclamationCircle />,
    },
    {
        id:2,
        icon:<MdDownloadForOffline />,
        text:"31 MB",
    },
    {
        id:3,
        icon:<PiNumberSquareFourLight />,
        text:"Rated for 4+",
        icon2:<AiOutlineExclamationCircle />
    },
    {
        id:4,
        data:"500M+",
        text:"Downloads"
    },
]
export const dashboard = [
    {
        id:1,
        icon:<GoHome />,
        text:"Home",
        link:"/"
    },
    {
        id:2,
        icon:<LiaFlag />,
        text:"My goals",
    },
    {
        id:3,
        icon:<MdDateRange />,
        text:"Schedule",
    },
    {
        id:4,
        icon:<GiAchievement />,
        text:"Achievement",
    },
    {
        id:5,
        icon:< FaArrowTrendUp/>,
        text:"Statistics",
    },
]