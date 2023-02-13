import React from "react";

function GameResult({ result, guessList, answer }) {
  switch (result) {
    case "win":
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guessList.length > 1 ? `${guessList.length} guesses` : "1 guess"}
            </strong>
            .
          </p>
        </div>
      );
    case "lose":
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default GameResult;
