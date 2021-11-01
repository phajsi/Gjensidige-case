import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  text-align: center;
`;

const Box = styled.div`
  background-color: #143c6e;
  margin-bottom: 10px;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Box>
      <H1>Case: Pokemonkort</H1>
    </Box>
  );
};
export default Header;
