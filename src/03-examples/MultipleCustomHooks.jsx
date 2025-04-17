import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {

   const {counter, increase, decrease} = useCounter(1);
   const {data, isLoading, hasError, error} = useFetch(`http://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <div><h1>Poke-Care</h1></div>
        {isLoading
         ? 
         <LoadingMessage /> 
         : <PokemonCard 
            id = {data.id} 
            name = {data.name} 
            sprites = {[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.front_shiny,
            ]}/>}
        
        
        <button className="btn btn-primary mt-2" onClick={()=> counter > 1 ? decrease(): null}>Anterior</button>
        <button className="btn btn-primary mt-2" onClick={()=>increase()}>Siguiente</button>
    </>
)
}
