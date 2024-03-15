import { useDispatch } from "react-redux";
import { setOpenLogin } from "../store/LoginSlice";
import img from "../assets/home.jpg"
import { FaUserAlt } from "react-icons/fa";
import { setOpenNavbar } from "../store/NavbarSlice";
import img1 from "../../public/Logo.png"
import { IoNotifications } from "react-icons/io5";
import { setOpenNotification } from "../store/NotificationSlice";

const Home = () =>{
    const dispatch = useDispatch();
    const onLoginToggle = ()=>{
        dispatch(setOpenLogin({
          loginState:true,
        }))
      }
    const onMoreToggle = ()=>{
      dispatch(setOpenNavbar({
        navbarState:true,
      }))
    }
    const onNotificationToggle = () =>{
      dispatch(setOpenNotification({
        notificationState:true,
      }))
    }
    return (
    
        <>
          <div className="w-full h-screen relative">
            <div className="w-full h-screen bg-content">
            <img className="h-full w-full"  src={img} alt="" />
            </div>
            <div className="animate-bounce text-white text-center absolute top-[70%] left-[25%] h-[50vh] w-[50vw] translate-x-[-50%] translate-y-[-50%]">
              <button className="h-[100px] w-[100px] rounded-full btn-grad font-semibold text-[20px]  ">Play</button>
            </div>
            <div className="absolute text-white  top-[10px] right-0 left-0 flex justify-between items-center">
              <button onClick={onMoreToggle} >
                <img className="h-[65px] object-contain" src={img1} alt="" />
              </button>
              
            </div>
            <div className="absolute text-white right-[10px] flex gap-[20px] items-center top-[10px]">
             <button onClick={onNotificationToggle}><IoNotifications className="text-[25px]" /></button>
             <button onClick={onLoginToggle}><FaUserAlt className="text-[20px]" /></button>
            </div>
            
          </div>
        </>
      
    );
}

export default Home;