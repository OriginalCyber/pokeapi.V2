import { useState } from "react";
import Axios from "axios";


function Search() {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonChosen, setPokemonChosen] = useState(false);
	const [pokemon, setPokemon] = useState({
		name: "",
		species: "",
		img: "",
		hp: "",
		attack: "",
		defense: "",
		type: "",
	});

	const searchPokemon = () => {
		Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
			(response) => {
				setPokemon({
					name: pokemonName,
					species: response.data.species.name,
					img: response.data.sprites.other.dream_world.front_default,
					hp: response.data.stats[0].base_stat,
					attack: response.data.stats[1].base_stat,
					defense: response.data.stats[2].base_stat,
					type: response.data.types[0].type.name,
				});
				setPokemonChosen(true);
			}
		);
	};

	return (

		<div className="app-card">
			<div className="section">
				<h1>Search Pokemon</h1>
				<input
					type="text" name="search" placeholder="Please choose a Pokemon.."
					onChange={(event) => {
						setPokemonName(event.target.value);
					}}
				></input>
				<button onClick={searchPokemon}>Search Pokemon</button>
			</div>
			<div className="display">
				{!pokemonChosen ? (
					<h1> </h1>
				) : (
					<>
						<h1>{pokemon.name}</h1>
						<img src={pokemon.img} alt="" />
						<h3>Species: {pokemon.species}</h3>
						<h3>type: {pokemon.type}</h3>
						<h4>Hp: {pokemon.hp}</h4>
						<h4>Attack: {pokemon.attack}</h4>
						<h4>Defense: {pokemon.defense}</h4>
					</>
				)}
			</div>
		</div>
	);
}
export default Search;



