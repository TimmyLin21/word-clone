import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function addToList(guess) {
    const newGuessList = [
      ...guessList,
      { id: crypto.randomUUID(), value: guess },
    ];
    if (newGuessList.length > NUM_OF_GUESSES_ALLOWED) {
      window.alert("You've reached the maximum guess times :(");
      return;
    }
    setGuessList(newGuessList);
  }

  return (
    <>
      <GuessResult guessList={guessList} answer={answer} />
      <GuessInput addToList={addToList} />
    </>
  );
}

export default Game;
