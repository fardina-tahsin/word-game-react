import "./gameDesign.css";
import { useGame } from "./useGame";
import Teddy from "./teddyComponent"; 

const WordGame = () => {
  const {
    word,
    guessedLetters,
    handleGuess,
    resetGame,
    gameStatus,
    incorrectGuesses,
  } = useGame();

  return (
    <div className="game-wrapper">
      <div className="word-container">
        <h1>Word Guess</h1>
        <p className="subtitle">Guess the word before Teddy gets too scared!</p>

        <div className="word-display">
          {word.split("").map((letter, i) => (
            <span
              key={i}
              className={`letter ${guessedLetters.includes(letter) ? "guessed" : ""}`}
            >
              {guessedLetters.includes(letter) ? letter : "_"}
            </span>
          ))}
        </div>

        {gameStatus === "win" && <p className="result-message">You Won!</p>}
        {gameStatus === "lose" && <p className="result-message">You Lost! The word was: {word}</p>}

        <div className="letterButtons">
          {Array.from({ length: 26 }).map((_, i) => {
            const letter = String.fromCharCode(65 + i);
            return (
              <button
                key={i}
                onClick={() => handleGuess(letter)}
                disabled={guessedLetters.includes(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>

        <button className="new-game-button" onClick={resetGame}>
          Start New Game
        </button>
      </div>

      <Teddy incorrectGuesses={incorrectGuesses} />
    </div>
  );
};

export default WordGame;
