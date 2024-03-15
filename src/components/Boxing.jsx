import img from "../assets/boxing.jpg";
import { ratings } from "../data/data";
import { BiSolidCheckbox } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
const Boxing = () =>{
    return(
        <div className="mx-[60px] h-[90vh] mt-[30px]">
            <div className="flex h-full gap-[50px]">
                <img className=" w-[50vw] rounded-xl " src={img} alt="" />
                <div>
                    <h1 className="text-[45px] font-semibold leading-[45px]">Boxing:Win to Gain</h1>
                    <p className="text-blue-700 text-[20px] tracking-wider">Boxing</p>
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
                        <p className="leading-tight text-[15px] text-slate-400 mt-[20px]">This is one vs one boxing battle which can be 
                        multiplayer. In this game we need to selelct what level opponent we want to face and the reward will also increase
                        as the level increases of opponent. we can also gain points by not only winning but also doing some critical hits.
                        This game helps to improve our muscle of hands and also we can gain some experience of fighting which is very useful 
                        as self-defence. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Boxing;