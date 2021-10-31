import React, { useEffect, useState } from "react";
import { Pokemon } from "../types";
import { fetchPokemon } from "../utils";
import styled from "styled-components";

const Img = styled.img`
  height: 50vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50vw;
  text-align: center;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
`;

const InfoContainer: React.FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon("pikachu").then((res) => setPokemon(res));
  }, []);

  if (pokemon) {
    return (
      <Card>
        <Img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <h1>{pokemon.name}</h1>
        <h2>Moves:</h2>
        <ul>
          {pokemon?.moves.slice(0, 3).map((element, index) => (
            <li key={index}>{element.move.name}</li>
          ))}
          ;
        </ul>
      </Card>
    );
  } else {
    return <h1>Pokemon couldn't be found</h1>;
  }
};
export default InfoContainer;
