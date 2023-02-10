import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guessObj, answer }) {
  const checkResult = checkGuess(guessObj.value, answer);
  console.log(checkResult);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={`cell ${checkResult ? checkResult[index].status : ""}`}
        >
          {guessObj?.value.charAt(index)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
