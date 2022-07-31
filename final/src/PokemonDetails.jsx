import { Pokedex } from "pokeapi-js-wrapper";
import { useEffect, useState, Fragment } from "react";

export default function PokemonDetails(props) {
    const { pokemonName, goHome, goBack } = props;
    const [hasError, setErrors] = useState(false);
    // this is null since pokemon will be an object and not an array
    const [pokemon, setPokemon] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
                // TODO Update this to call .getPokemonByName() <- pokemonName
                console.log(pokemonName);
                const response = await (new Pokedex()).getPokemonByName(pokemonName) //< -(pokemonName);
                // TODO just store reponse
                console.log(response);
                setPokemon(response);
            }
            catch (error) {
                setErrors(error)
            }
        }
        fetchData();
        // TODO change to pokemonName
    }, [pokemonName]);

    if (hasError) {
        return <div>An error has occured when trying to make a request</div>
    }

    // TODO if pokemon is null return null

    if (pokemon === null) {
        return null
    }

    // TODO - update this to retun the name, sprite, abilites, types, stats
    return (
        /* <ul>
 
             return (<li key={index}>
               
                 //<button onClick={() => onSelection(pokemon.name)}>View</button>
             </li>)
 
         </ul>*/
        <Fragment><button onClick={goHome}>Home</button><button onClick={goBack}>Back</button><div><span>{pokemon.name}</span>
            <img src={pokemon.sprites.front_default}alt={pokemon.name}></img>
            <div>{pokemon.abilities.map((ability, i) => <div key={i}>{ability.ability.name}</div>)}</div>
            <div>{pokemon.stats.map((stat, i) => <div key={i}>{stat.stat.name}: {stat.base_stat}</div>)}</div>
            <div>{pokemon.types.map((type, i) => <div key={i}>{type.type.name}</div>)}</div>
        </div>
        </Fragment>
    );
}