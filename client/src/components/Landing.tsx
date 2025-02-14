import { useState } from "react"

const Landing = () => {
  const [name,setName]= useState("");

    return (
    <div className="w-full h-screen flex justify-around items-center flex-col">
        <h1 className="text-8xl md:text-9xl m-10 p-10 text-slate-500 underline">Omegle</h1>
       <div className="flex justify-start items-center flex-col h-[50%]">
       <input type="text" className="text-xl px-10 py-5 rounded-xl bg-slate-200 border-[2px] border-slate-300 text-center font-bold text-slate-500" onChange={(e)=>{
            setName(e.target.value)
        }} placeholder="name"/>
        <button className="bg-slate-400 text-white px-10 py-5 font-bold text-xl m-4 rounded-xl focus:bg-slate-500 f" onClick={()=>{
 // join room logic here 
        }}>Join Room</button>
        <div>{name}</div>
       </div>
       
    </div>
  )
}

export default Landing

// bg-gradient-to-r from-slate-200 to-slate-600