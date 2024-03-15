import img from "../assets/background.jpg";
import {  useSelector,useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";

import { selectLoginState, setCloseLogin } from "../store/LoginSlice";
const Login = () =>{

  const ifLoginState = useSelector(selectLoginState);
  const dispatch = useDispatch();
    const onLoginToggle = ()=>{
        dispatch(setOpenLogin({
          loginState:false,
        }))
      }
    const onExitLogin = () =>{
        dispatch(setCloseLogin({
            loginState:false,
        }))
    }

    return(
      <div className={`fixed top-0 left-0 right-0 bottom-0 duration-100 opacity-100 w-screen h-screen ${ifLoginState ? "opacity-100 visible" : "opacity-0 invisible"} `}>
        <button onClick={onExitLogin} className="absolute top-[20px] right-[20px]">
            <ImCross className="text-slate-400 text-[20px]" />
        </button>
        <img src={img} alt="" className="h-screen w-screen" />
        <div className=" absolute left-[50%] top-[50%] text-center translate-x-[-50%] translate-y-[-50%] h-[50vh] w-[45vw]">
            <h1 className="text-white text-[28px] font-semibold leading-tight mb-[5px]">Create Your Account</h1>
            <p className="text-[13px] font-semibold leading-tight text-[#eee9e9cf] tracking-wide">Let's get started with your 30 days free trial.</p>
            <form className="">
            <label
              className="font-semibold text-[13px] flex justify-start text-white leading-tight"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-[1px] border-gray-400 w-full outline-none px-[10px] py-[9px] rounded-full text-[13px] tracking-wide leading-tight font-semibold mb-[15px]"
              placeholder="Enter your game user name"
              required
            />
            <label
              className="font-semibold flex justify-start text-[13px] text-white leading-tight"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-[1px] border-gray-400 mb-[15px] w-full outline-none px-[10px] py-[9px] rounded-full text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your email"
              required
            />
            <label
              className="font-semibold text-[13px] flex justify-start text-white leading-tight"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-[1px] mb-[15px] border-gray-400 w-full outline-none px-[10px] py-[9px] rounded-full text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your password"
              required
            />
            <div className="flex items-center gap-3 my-[15px]">
              <input type="checkbox" className="cursor-pointer" required />
              <span className="text-[13px] tracking-wide leading-tight font-semibold text-white">
                I agree to all Terms and Conditions.
              </span>
            </div>
            <button
              type="submit" onClick={onLoginToggle}
              className="w-full bg-[#e2007b] box-shadow text-white tracking-wide leading-tight font-semibold text-[14px] py-[8px] rounded-full active:scale-110"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login;