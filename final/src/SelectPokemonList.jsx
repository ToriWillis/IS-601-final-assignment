import { useEffect, useState, Fragment } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
export default function SelectPokemon(props) {
    const { onSelection, pokedexName, goHome, goBack } = props;
    const [hasError, setErrors] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await new Pokedex().getPokedexByName(pokedexName);
                setPokemon(response.pokemon_entries);
            }
            catch (error) {
                setErrors(error)
            }
        }
        fetchData();
    }, [pokedexName]);

    if (hasError) {
        return <div>oops</div>
    }

    //<button onClick={() => onSelection(pokemon_species.name)}>View</button>
    return (
        <Fragment>
            <button onClick={goHome}>Home</button><button onClick={goBack}>Back</button>
            <ul>
                {pokemon.map(function ({ pokemon_species }, index) {
                    return (<li key={index}>
                        <span>{pokemon_species.name}</span>
                        <button onClick={() => onSelection(pokemon_species.name)}>View</button>
                    </li>)
                })}
            </ul>
        </Fragment>
    );

}

