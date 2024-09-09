import PokemonTypes from "./PokemonTypes";

export default function PokemonCard({ pokemon }) {
    const { paddedId, name, types, imgSrc } = pokemon;

    return (
        <div className={`pokemon-card ${pokemon.types[0].name}`}>
            <div>
                <span className="id-number">{`#${paddedId}`}</span>
                <span className="pokemon-name">{name}</span>
                <PokemonTypes types={types} />
            </div>
            <img className="pokemon-image" src={pokemon.imgSrc} />
        </div>
    )
}