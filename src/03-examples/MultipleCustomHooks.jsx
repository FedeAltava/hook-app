import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";


export const MultipleCustomHooks = () => {

   const {counter, increase, decrease} = useCounter(1);
   const {data, isLoading, hasError, error} = useFetch(`http://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <div>MultipleCustomHooks</div>
        {isLoading && <LoadingMessage />}
        
        <h2>{data?.name}</h2>
        <button className="btn btn-primary mt-2" onClick={()=> counter > 1 ? decrease(): null}>Anterior</button>
        <button className="btn btn-primary mt-2" onClick={()=>increase()}>Siguiente</button>
    </>
)
}
