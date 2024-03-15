import img from "../assets/vr.webp"
const Something = ()=>{
    return (
        <div className="mt-[50px] bg-slate-100 flex items-center mx-[60px] p-[30px]">
            <div>
            <h1 className=" text-[44px] font-semibold leading-[44px] mb-[20px]">We are connecting virtual world with real world.</h1>
            <p className=" text-slate-600 font-medium">You can enjoy your daily fitness training as game.</p>
            <button className="btn-grad font-semibold px-[20px] mt-[20px] py-[13px] rounded-xl">GET STARTED</button>
            </div>
            
            <img className="h-[70vh] w-[50vw] rounded-md" src={img} alt="" />
        </div>
    );
}

export default Something;