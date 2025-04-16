import { useState } from "react";
import { useEffect } from "react"


export const Message = () => {

    const [ coords, setCoords ] = useState({x:0, y:0})

    useEffect(()=>{

        const onMouseMove = ({ x, y})=>{
            setCoords({ x, y})
            console.timeLog(coords);
        }

        window.addEventListener('mousemove',onMouseMove);

        return ()=>{
            window.removeEventListener('mousemove',onMouseMove);
        }

    },[])
  
  
    return (
    <>
        <h3>{JSON.stringify(coords)}</h3>
    </>
  )
}
