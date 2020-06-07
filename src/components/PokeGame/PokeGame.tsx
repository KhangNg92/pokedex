import React from "react";
import { Pokemons } from "../../utils/constants";
import PokeDex from "../PokeDex/PokeDex";

const PokeGame = () => {
  let hand1 = [];
  let hand2 = [...Pokemons];

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }
  let exp1 = hand1.reduce(
    (exp, { base_experience }) => exp + base_experience,
    0
  );
  let exp2 = hand2.reduce(
    (exp, { base_experience }) => exp + base_experience,
    0
  );

  return (
    <div>
      <PokeDex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <PokeDex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
};

export default PokeGame;
