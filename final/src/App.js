import { useState } from "react"
import PokemonDetails from "./PokemonDetails";
import SelectPokedex from "./SelectPokedex";
import SelectPokemon from "./SelectPokemonList";

export default function App() {
  const [pokedex, setSelectedPokedexName] = useState(null)
  const [selectPokemon, setSelectedPokemon] = useState(null)
  // TODO have state for the selected pokemon name

  function goHome() {
    setSelectedPokedexName(null);
    setSelectedPokemon(null);
  }
  //function goBack() { setSelectedPokemon(null) };
  if (pokedex === null) {
    return <SelectPokedex onSelection={(name) => setSelectedPokedexName(name)} />
  }

  // TODO if selected pokemon name is null
  // render the component to select the pokemon
  // pass in the onSelection to set the pokemon name
  // pass in the selected pokedex name

  if (selectPokemon === null) {
    return <SelectPokemon onSelection={(name) => setSelectedPokemon(name)} pokedexName={pokedex} goHome={goHome} goBack={() => {
      setSelectedPokedexName(null);
    }} />
  }

  // TODO - return a <PokemonDetails /> 
  // pass pokemonName={selectPokemon}
  return (
    /*<div>{pokedex} - {selectPokemon}
    </div>);*/
    <PokemonDetails pokemonName={selectPokemon} goHome={goHome} goBack={() => {
      setSelectedPokemon(null);
    }}></PokemonDetails>
  )

}

