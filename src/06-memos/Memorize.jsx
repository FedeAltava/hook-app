import React from 'react'
import {useCounter} from '../hooks'
export const Memorize = () => {
    const { counter, increase } = useCounter();

  return (
    <>
        <h1>Counter: <small> {counter}</small> </h1>
        <hr />
        <button className='btn btn-primary mt2' onClick={()=> increase()}>+1</button>
    </>
  )
}
