import { useFetch } from "../hooks"


export const MultipleCustomHooks = () => {

   const {data, isLoading, hasError, error} = useFetch('http://pokeapi.co/api/v2/pokemon/1');

  return (
    <>
        <div>MultipleCustomHooks</div>
        {isLoading&&<p>...Cargando</p>}
        
        <h2>{data?.name}</h2>
    
    </>
)
}
