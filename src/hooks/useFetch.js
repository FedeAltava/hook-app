import { useEffect } from "react";
import { useState } from "react"


export const useFetch = () => {
  const [state, setState ] = useState({
    data:null,
    isLoading:true,
    hasError:false,
    error: null,
  });

  useEffect(()=>{
    
  })

  const getFetch = async()=>{
    fetch('http://pokeapi.co/api/v2/pokemon/1')
  }

  const {data, isLoading, hasError, error} = state;
    return{
        data,
        isLoading,
        hasError,
        error,
    }
}
