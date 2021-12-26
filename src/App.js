import "./App.css";
import LegendContainer from "./components/LegendContainer";
import MainMenuContainer from "./components/MainMenuContainer";
import DropDownMenuContainer from "./components/DropDownMenuContainer";
import React, { useState } from "react";

function App() {
  return (
    <>
      <MainMenuContainer />
      <DropDownMenuContainer />
      <LegendContainer />
    </>
  );
}

export default App;
