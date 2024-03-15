import img from "../assets/marathon.webp";
import { ratings } from "../data/data";
import { BiSolidCheckbox } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
const Marathon = () =>{
    return(
        <div className="mx-[60px] h-[90vh] mt-[30px]">
            <div className="flex h-full gap-[50px]">
                <img className=" w-[50vw] rounded-xl " src={img} alt="" />
                <div>
                    <h1 className="text-[45px] font-semibold leading-[45px]">Marathon:Run to Earn</h1>
                    <p className="text-blue-700 text-[20px] tracking-wider">Marathon</p>
                    <p className="text-[15px] leading-tight text-slate-500 flex gap-[10px] items-center">Contains ads <BiSolidCheckbox className="text-[8px]" /> In-app purchases </p>
                    <div className="flex items-center mt-[20px] justify-between">
                    {ratings.map((item,index)=>(
                        <div key={index} >
                        <div className="flex items-center gap-[8px] justify-center">
                            <div>{item.data}</div>
                            <div className={`${index == 1  ? "text-[24px]":""} ${index == 2 ?"text-[24px]":""} `}>{item.icon}</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-[12px] leading-tight text-slate-500">{item.text}</div>
                            <div className="text-[12px]">{item.icon2}</div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <button className="flex gap-[10px] my-[25px] items-center btn-grad px-[30px] py-[10px] rounded-lg">
                        <div className="font-semibold text-[20px]">Play</div>
                        <div><FaPlay /></div>
                    </button>
                    <div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-[20px]">About this game</p>
                            <p className="text-[20px]"><FaArrowRight /></p>
                        </div>
                        <p className="leading-tight text-[15px] text-slate-400 mt-[20px]">In this game we need to run a marathon in which there are some virtual players
                            we need to compete. This is clearly a real world game only the players are edited
                            when we play this game. All the things like building, road etc we don't interfere 
                            with it we want to make it connect to the real world so to minimize accidents.
                            Daily we can run,win,set the record to win the game currency and we can withdraw it 
                            only after some limited amount.This game also helps us to increase our stamina and can 
                            make our heart healthy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Marathon;