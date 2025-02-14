import { useState } from "react"
import { Link } from "react-router-dom";

const Landing = () => {
  const [name,setName]= useState("");

    return (
    <div className="w-full h-screen flex justify-around items-center flex-col">
        <div className="flex justify-center items-center">
        <h1 className="text-8xl md:text-9xl my-10 py-10 underline font-bold bg-gradient-to-r from-[#f4900c] to-[#55acee] text-transparent bg-clip-text">Omegle</h1>
            <span className="text-8xl hidden md:inline">🔵🟠</span>
        </div>
       
       <div className="flex justify-start items-center flex-col h-[50%]">
       <input type="text" className="text-xl px-10 py-5 rounded-xl bg-slate-200 border-[2px] border-slate-300 text-center font-bold text-slate-500" onChange={(e)=>{
            setName(e.target.value)
        }} placeholder="name"/>
        <Link to={`/room?${name}`} className="bg-slate-400 text-white px-10 py-5 font-bold text-xl m-4 rounded-xl focus:bg-slate-500 f" onClick={()=>{

        }}>Join Room</Link>
      
       </div>
       
    </div>
  )
}

export default Landing

// bg-gradient-to-r from-slate-200 to-slate-600