import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [ counter, setCounter] = useState(initialValue);

    const increase = ()=>{
        setCounter(prev=>prev+1);
    }
    const decrease = ()=>{
        if(counter === 0)return;
        setCounter(prev=>prev-1);
    }

    const reset = ()=>{
        setCounter(initialValue);
    }
  return {
    counter,
    increase,
    decrease,
    reset
  }
}
