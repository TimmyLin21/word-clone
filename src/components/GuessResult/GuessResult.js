import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResult({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          guessObj={guessList[index] || { value: "" }}
          key={index}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResult;
