import PokemonCard from "./PokemonCard";
import { pokemons } from "./pokemons";

export default function PokemonsContainer() {
    return (
        <div className='pokemons-container'>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.paddedId} pokemon={pokemon} />
            ))}
        </div>
    );
}