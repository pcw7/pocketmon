import { getTypeIconSrc } from "./utils";

export default function PokemonTypes({ types }) {
    return (
        <div className="types">
            {types.map((type) => (
                <div key={type.name} className={type.name}>
                    <img src={getTypeIconSrc(type.name)} />
                    <span>{type.name}</span>
                </div>
            ))}
        </div>
    )
}