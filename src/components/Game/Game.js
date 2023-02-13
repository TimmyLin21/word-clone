import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameResult from "../GameResult/GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [result, setResult] = React.useState(null);

  function addToList(guess) {
    const newGuessList = [
      ...guessList,
      { id: crypto.randomUUID(), value: guess },
    ];
    setGuessList(newGuessList);
    if (guess === answer) {
      setResult("win");
    } else if (newGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setResult("lose");
    }
  }

  return (
    <>
      <GuessResult guessList={guessList} answer={answer} />
      <GuessInput addToList={addToList} result={result} />
      <GameResult result={result} guessList={guessList} answer={answer} />
    </>
  );
}

export default Game;
