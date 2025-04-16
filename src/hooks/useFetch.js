import { useEffect } from "react";
import { useState } from "react"
import { Message } from "../02-UseEffect/Message";


export const useFetch = (url) => {
  const [state, setState ] = useState({
    data:null,
    isLoading:true,
    hasError:false,
    error: null,
  });

  useEffect(()=>{
    getFetch()
  },[url])

   const setLoadingState = () =>{
    setState({
        data:null,
        isLoading:true,
        hasError:false,
        error: null,
    })
   };

  const getFetch = async()=>{
    
    setLoadingState();

    const response = await fetch(url);

    const data = await response.json();
    //sleep
    await new Promise( resolve => setTimeout(resolve,100));
    if(!response.ok){
        setState({
            data:null,
            isLoading:false,
            hasError:true,
            error:{
                code:response.status,
                Message:response.statusText,
            }
        })
        return;
    };


    setState({
        data:data,
        isLoading:false,
        hasError:false,
        error:null,
    })

  }

  const {data, isLoading, hasError, error} = state;
    return{
        data,
        isLoading,
        hasError,
        error,
    }
}
