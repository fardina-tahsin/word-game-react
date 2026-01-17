import { useState, useEffect, useCallback } from "react";

const words = ["HERO", "PASTRY", "JELLY", "WORD", "GUESS", "PRETTY", "REMIND", "CODING", "FUN"];

export const useGame = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrect] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  const chooseRandomWord = useCallback(() => {
    const index = Math.floor(Math.random() * words.length);
    return words[index].toUpperCase();
  }, []);

  const resetGame = useCallback(() => {
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setIncorrect(0);
    setGameStatus("playing");
  }, [chooseRandomWord]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!word.includes(letter)) {
      setIncorrect((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (word && word.split("").every((l) => guessedLetters.includes(l))) {
      setGameStatus("win");
    } 
    else if (incorrectGuesses >= 6) { 
      setGameStatus("lose");
    }
  }, [guessedLetters, incorrectGuesses, word]);

  return {
    word,
    guessedLetters,
    incorrectGuesses,
    handleGuess,
    resetGame,
    gameStatus,
  };
};
