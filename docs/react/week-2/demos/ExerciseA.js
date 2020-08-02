import React from "react";

import DemoWrapper from "../../DemoWrapper";

function Demo() {
  function logWhenClicked() {
    console.log("Clicked!");
  }
  return (
    <header>
      <h1>Welcome to the Pokedex</h1>
      <img
        onClick={logWhenClicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
        style={{ maxWidth: "200px" }}
      />
    </header>
  );
}

export function ExerciseADemo() {
  return (
    <DemoWrapper showConsole>
      <Demo />
    </DemoWrapper>
  );
}
