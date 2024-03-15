import { navbar } from "../data/data";
import { useSelector,useDispatch } from "react-redux";
import { selectnavbarState, setCloseNavbar} from "../store/NavbarSlice";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Navbar = () =>{
    const ifNavbarState = useSelector(selectnavbarState);
    const dispatch = useDispatch();
    const onNavbarToggle = ()=>{
        dispatch(setCloseNavbar({
          navbarState:false,
        }))
      }
    return(
      <div className={`h-screen translate-x-[-800px] duration-200 ease-in-out w-[25vw] px-[40px] py-[30px] fixed z-20 top-0 left-0 bottom-0 opacity-100 blur-effect-theme rounded-sm ${ifNavbarState ? " visible opacity-100 translate-x-[0px]":"invisible opacity-0"}`}>
        <button onClick={onNavbarToggle} className="absolute top-[10px] left-[10px]">
         <FaArrowAltCircleLeft className="text-[20px]" />
        </button>
        {navbar.map((item,index)=>(
          <a href={item.link} onClick={onNavbarToggle}>
            <button  className="flex  group shadow-sm shadow-slate-600 items-center gap-[40px] px-[15px] py-[10px] mb-[20px] rounded-lg w-full ease-in transition-all duration-300 gradient " key={index}>
                <div className="bg-black group-hover:bg-white p-[10px] rounded-md group-hover:text-black text-white text-[25px]">
                    {item.icon}
                </div>
                <p className="text-black group-hover:text-white font-semibold">{item.name}</p>
            </button>
          </a>
        ))}
      </div>
    );
}

export default Navbar;