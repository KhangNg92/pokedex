import React, { FC } from "react";

import PokeCard from "../PokeCard/PokeCard";

import "./PokeDex.css";

type PokeDexProps = {
  pokemon: Array<{
    id: number;
    name: string;
    type: string;
    base_experience: number;
  }>;
  exp: number;
  isWinner: boolean;
};
const PokeDex: FC<PokeDexProps> = ({ pokemon, exp, isWinner }) => {
  return (
    <div className="Pokedex">
      <h1 className={`Pokedex-${isWinner ? "winner" : "looser"}`}>
        {isWinner ? "Winning" : "Losing"} Hand
      </h1>
      <h4>Total Experience: {exp}</h4>

      <div className="Pokedex-cards">
        {pokemon.map(({ id, name, type, base_experience }) => (
          <div key={id}>
            <PokeCard id={id} name={name} type={type} exp={base_experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeDex;
