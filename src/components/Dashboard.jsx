import { FaCircleUser } from "react-icons/fa6";
import { dashboard } from "../data/data";
import { CgGym } from "react-icons/cg";
import { GiMeal } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";
import img from "../assets/graph.jpg"
const Dashboard = () => {
    return (
        <div className="bg-slate-200 h-screen flex pt-[30px] w-screen">
            <div className="relative h-[90vh] w-[22vw] border-[0.5px] shadow-lg shadow-black rounded-xl  bg-white border-[#0707074b] mx-[30px]">
              <div className="p-[15px]">
                <FaCircleUser className="text-[38px]" />
                <p className="leading-tight tracking-wider my-[3px]">Swoyam Dhanuke</p>
                <p className="text-[12px] leading-tight text-slate-500">Male,28 years</p>
              </div>
              <p className="text-[12px] text-red-700 font-semibold tracking-wider leading-tight absolute right-[15px] top-[15px]">Edit</p>
              <div className="flex items-center w-full justify-between border-t-[1px] border-slate-200 border-b-[1px] ">
                <div className="p-[15px] w-[50%] border-r-[1px] border-slate-200 text-center">
                    <h1 className="text-[12px] text-blue-500 font-semibold tracking-wider leading-tight">HEIGHT</h1>
                    <p className="leading-tight text-[16px]">185 <span className="text-[12px] text-slate-500 leading-tight">cm</span> </p>
                </div>
                <div className="p-[15px] w-[50%] text-center">
                    <h1 className="text-[12px] text-blue-500 font-semibold tracking-wider leading-tight">WEIGHT</h1>
                    <p className="leading-tight text-[16px]">100 <span className="text-[12px] text-slate-500 leading-tight">kg</span> </p>
                </div>
              </div>
              <div className="p-[20px] w-full">
                {dashboard.map((item,index)=>(
                    <a href={item.link}>
                    <button className="flex group w-full mb-[10px] rounded-sm shadow-sm shadow-slate-500 items-center gap-[20px] py-[10px]" key={index}>
                        <div className="text-[30px] group-hover:text-red-500">{item.icon}</div>
                        <div className="group-hover:text-red-500">{item.text}</div>
                    </button>
                    </a>
                ))}
              </div>
            </div>
            <div className="mt-[20px] w-[70vw]">
                <h1 className="text-[12px] text-blue-500 font-semibold tracking-wider leading-tight">GOAL</h1>
                <p className="text-[20px] mt-[5px] mb-[20px] leading-tight tracking-wider"> Build Muscles</p>
                <div className="flex justify-between w-full">
                    <div className="flex gradient1 items-center gap-[10px] p-[20px]">
                        <div>
                            <CgGym className="text-[60px]" />
                            <h1 className="leading-tight">10 Exercises</h1>
                            <p className="text-[12px] leading-tight text-slate-200">1 hour 50 minutes</p>
                        </div>
                        <div className="rounded-full p-[3px] h-[100px] w-[100px] round1">
                            <div className="bg-[#12D8FA] text-[15px] text-slate-300 h-full w-full flex items-center justify-center rounded-full">
                                <span className="text-[30px] text-white font-bold">5</span>/10
                            </div>
                        </div>
                    </div>
                    <div className="gradient2 flex items-center gap-[45px] p-[20px]">
                     <div className="">
                         <GiMeal className="text-[60px]" />
                         <h1 className="leading-tight">6 Meals</h1>
                        <p className="text-[12px] leading-tight text-slate-200">1604.0 cal</p>
                        </div>
                        <div className="rounded-full p-[3px] h-[100px] w-[100px] round1">
                            <div className="bg-[#FFB88C] text-[15px] text-slate-300 h-full w-full flex items-center justify-center rounded-full">
                                <span className="text-[30px] text-white font-bold">4</span>/10
                            </div>
                     </div>
                    </div>
                    <div className="gradient3 flex items-center gap-[45px] p-[20px]">
                     <div className="">
                         <GiNightSleep className="text-[60px]" />
                         <h1 className="leading-tight">Proper Sleep</h1>
                        <p className="text-[12px] leading-tight text-slate-200">8 Hours</p>
                        </div>
                        <div className="rounded-full p-[3px] h-[100px] w-[100px] round1">
                            <div className="bg-[#a8e063] text-[15px] text-slate-100 h-full w-full flex items-center justify-center rounded-full">
                                <span className="text-[30px] text-white font-bold">6</span>/10
                            </div>
                     </div>
                    </div>
                </div>
                <img src={img} className="h-[50vh] w-full mt-[20px] rounded-xl" alt="" />
            </div>
        </div>
    );
}
export default Dashboard;