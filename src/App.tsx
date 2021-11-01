import React from "react";

import InfoContainer from "./components/InfoContainer";
import Header from "./components/Header";

import "./app.css";

const App = () => {
  return (
    <div className="appRoot">
      <Header />
      <InfoContainer />
    </div>
  );
};

export default App;
