import { useEffect } from "react";
import './PokemonView.css'
const { useState } = require("react");


const PokemonView = () => {

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [types, setTypes] = useState('');
    console.log("PokemonView")

    useEffect(() => {
        console.log("useEffect")
        fetch('http://pokeapi.co/api/v2/pokemon/1')
        .then(response => response.json())
        .then( data => {
            setName(data.name)
            setPhoto(data.sprites.front_default)
            setTypes(data.types.map(type => type.type.name))
        })
    }, [])

    return (
        <div className="pokemon">
            <h1>{name}</h1>
            <img src={photo} alt={name} />
            <h2>{types[0]} {types[1]}</h2>

        </div>


    );
}

export default PokemonView;