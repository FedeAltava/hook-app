import { useState } from "react"


export const CounterApp = () => {
  const [ counter, setCounter ]= useState(10);
    return (
    <>
        <h1>{counter}</h1>
        <hr />
        <button onClick={() => setCounter(prev => prev + 1)}>+1</button>

    </>
  )
}
