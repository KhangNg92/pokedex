import React, { FC } from "react";
import { POKE_API } from "../../utils/constants";
import "./PokeCard.css";

type PokeCardProps = {
  id: number;
  name: string;
  type: string;
  exp: number;
};

const PokeCard: FC<PokeCardProps> = ({ id, name, type, exp }) => {
  const padToThree = (num: number) => (num <= 999 ? `00${num}`.slice(-3) : num);
  let imgSrc = `${POKE_API}${padToThree(id)}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name}></img>
      </div>
      <div className="Pokecard-data"> Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
};

export default PokeCard;
