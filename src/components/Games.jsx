import { FaArrowRightLong } from "react-icons/fa6";
import { GamesApi } from "../data/data";
const Games = () =>{
    return(
        <div className="m-[60px] " id="GAME">
            <h1 className="text-[55px] mb-[20px] w-full text-center font-semibold">Our Games</h1>
        <div className="h-[50vh] w-[90vw] gap-[20px] flex items-center justify-between">
            
            {GamesApi.map((item,index)=>(
                <div className="h-full" key={index}>
                  <img className="h-full w-full rounded-lg" src={item.img} alt="" />
                  <h1 className="text-[28px] mt-[8px] font-semibold leading-tight">{item.title}</h1>
                  <p className="text-[16px] mt-[10px] leading-[16px] text-slate-500 font-[500]">{item.text}</p>
                  <a href={item.link}>
                  <button className="w-full my-[20px] font-semibold btn-grad py-[12px] rounded-lg flex justify-center items-center gap-[5px]">More bout this game <FaArrowRightLong /> </button>
                  </a>
                  
                </div>
            ))}
        </div>
        </div>
    );
}

export default Games;