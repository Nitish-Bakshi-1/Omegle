import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"


const Room = () => {
  const [name,setName] = useSearchParams();
useEffect(()=>{

},[name])
  return (
    <div>
 hi {name}    
    </div>
  )
}

export default Room