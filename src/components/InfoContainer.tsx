import React, { useEffect, useState } from "react";
import { Pokemon } from "../types";
import { fetchPokemon } from "../utils";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
  border: 10px solid #f5d226;
  min-width: 28vw;
  max-height: 70vh;
  background: linear-gradient(143.38deg, #e1c737 0%, #ffe974 100%);
  border-radius: 15px;
  padding: 10px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  height: 34px;
  text-transform: uppercase;
`;

const ImgContainer = styled.div`
  border: 4px solid #c6a607;
  width: 70%;
  margin: auto;
`;

const Img = styled.img`
  margin: 0 auto;
  padding: 5px;
`;

const Info = styled(Section)`
  background-color: #cfb004;
  width: 100%;
  padding: 2px;
  height: 1.2rem;
  & > p {
    margin: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Stat = styled.p`
  text-transform: uppercase;
  font-weight: 600;
`;

const Move = styled(Section)`
  justify-content: center;
  padding: 4px;
  font-size: 1.2rem;
`;

const Divider = styled.div`
  height: 4px;
  background-color: #cfb004;
  width: 70%;
  margin: 0 auto;
`;

const InfoContainer: React.FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    fetchPokemon("pikachu").then((res) => setPokemon(res));
  }, []);
  if (pokemon) {
    return (
      <Card>
        <Section>
          <Title>{pokemon.name}</Title>
          <Stat>
            {pokemon.stats[0].base_stat} {pokemon.stats[0].stat.name}
          </Stat>
        </Section>
        <ImgContainer>
          <Img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} illustration`}
          />
          <Info>
            <Stat>Nr: {pokemon.id}</Stat>
            <Stat>Ht: {pokemon.height}</Stat>
            <Stat>Wt: {pokemon.weight}</Stat>
          </Info>
        </ImgContainer>
        {pokemon?.moves.slice(0, 3).map((element, index) => (
          <>
            <Move key={index}>{element.move.name}</Move>
            <Divider />
          </>
        ))}
      </Card>
    );
  } else {
    return <h1>Pokemon couldn't be found</h1>;
  }
};
export default InfoContainer;
