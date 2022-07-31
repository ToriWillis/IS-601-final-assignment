import { Pokedex } from "pokeapi-js-wrapper";
import { useEffect, useState } from "react";

export default function SelectPokedex(props) {
    const { onSelection } = props;

    const [hasError, setErrors] = useState(false);
    const [pokedexes, setPokedexes] = useState([]);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await new Pokedex().resource('api/v2/pokedex');
                setPokedexes(response.results);
            }
            catch (error) {
                setErrors(error)
            }
        }
        fetchData();
    }, []);

    if (hasError) {
        return <div>ope</div>
    }

    return (
        <ul>
            {pokedexes.map(function (pokedex, index) {
                return (<li key={index}>
                    <span>{pokedex.name}</span>
                    <button onClick={() => onSelection(pokedex.name)}>View</button>
                </li>)
            })}
        </ul>
    );

}