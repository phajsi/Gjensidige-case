import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./utils";
import { Pokemon } from "./types";

import InfoContainer from "./components/InfoContainer";

import "./app.css";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [type, setType] = useState<string>();
  console.log("type", type);

  useEffect(() => {
    fetchPokemon("bulbasaur").then((res) => setPokemon(res));
  }, []);

  useEffect(() => {
    if (pokemon === undefined) return setType("electric");
    else setType(pokemon!.types[0].type.name);
  }, [pokemon]);
  return (
    <div className="appRoot">
      <InfoContainer pokemon={pokemon} />
    </div>
  );
};

export default App;
