import { useDispatch, useSelector } from "react-redux";
import { selectNotificationState} from "../store/NotificationSlice";
import { GoAlertFill } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { setCloseNotification } from "../store/NotificationSlice";

const Notification = ()=>{
    const ifNotificationState = useSelector(selectNotificationState)
    const dispatch = useDispatch()
    const onNotificationToggle = () =>{
        dispatch(setCloseNotification({
          notificationState:false,
        }))
      }
    return(
        <div className={`h-auto translate-y-[-800px] duration-200 ease-in-out w-[30vw] pt-[20px] pb-[30px] fixed z-20 top-[20px] right-0 opacity-100 blur-effect-theme rounded-sm ${ifNotificationState ? " visible opacity-100 translate-y-[0px]":"invisible opacity-0"}`}>
            <div className="flex items-center justify-between border-b-[1px] px-[20px] border-slate-300">
            <p className="">Today</p>
            <button onClick={onNotificationToggle}><ImCross /></button>
            </div>
            
            <div className="flex items-center gap-[10px] bg-white mx-[20px] mt-[20px] p-[5px] rounded-lg shadow-lg border-[1px] border-slate-400 shadow-black">
                <div className="  h-full"><GoAlertFill className="text-[40px]" /></div>
                <div className="text-[12px] leading-tight tracking-wider text-ellipsis">Training Alert! Your daily training quost is ready. Plese complete in time otherwise, your half of the points will be taken as compensation.</div>
            </div>
        </div>
    );
}
export default Notification;