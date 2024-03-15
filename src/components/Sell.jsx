import img1 from "../assets/esewa.png"
import img2 from "../assets/khalti.png"
import img3 from "../assets/master.png"
const Sell = () =>{
    return(
        <div className="h-[120vh] m- w-screenn p-[60px] bg-slate-200">
            <div className="bg-white p-[20px] rounded-sm shadow-xl shadow-slate-400">
            <h1 className="text-[28px] mb-[5px] font-semibold leading-tight tracking-wider ">Your points</h1>
            <p className="text-[18px] leading-tight tracking-wider text-slate-600">Congtrats! You earned 1000 points playing games. You can withdraw the money by the method below.</p>
            </div>
            <div>
                <h1 className="text-center text-[35px] leading-[35px] my-[20px]">RECOMMENDED METHODS</h1>
                <div className="flex items-center gap-[30px] ">
                    <div className=" w-[300px] bg-white">
                    <img className="h-[60px] w-[60px] my-[20px] translate-x-[120px] rounded-full" src={img1} alt="" />
                    <p className="w-[300px] py-[20px] text-center bg-blue-500">Wallet Transfer</p>
                    </div>
                    <div className=" w-[300px] bg-white">
                    <img className="h-[60px] my-[20px] translate-x-[100px] object-content" src={img2} alt="" />
                    <p className="w-[300px] py-[20px] text-center bg-blue-500">Digital Wallet</p>
                    </div>
                </div>
            </div>
           <div>
            <h1 className="text-center my-[30px] text-[35px] leading-[35px]">BANK CARDS</h1>
            <div className=" w-[300px] bg-white pt-[10px]">
                    <img className="h-[60px] w-[60px] mt-[40px] mb-[20px] translate-x-[120px] rounded-full" src={img3} alt="" />
                    <p className="w-[300px] py-[20px] text-center bg-blue-500">Master Card</p>
                    </div>
           </div>
        </div>
    );
}
export default Sell;