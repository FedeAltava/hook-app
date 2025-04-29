import { useEffect } from "react";
import { useState } from "react"


const localCache = {};

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

    if(localCache[url]){
      console.log('usando caché');
      setState({
        data: localCache[url],
        isLoading:false,
        hasError:false,
        error: null,
      })
      return;
    };

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

    localCache[url] = data;

    setState({
        data:data,
        isLoading:false,
        hasError:false,
        error:null,
    })

  };


  const {data, isLoading, hasError, error} = state;
    return{
        data,
        isLoading,
        hasError,
        error,
    }
}
