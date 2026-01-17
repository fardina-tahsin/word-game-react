const Teddy = ({ incorrectGuesses }) => {
  const maxGuesses = 6;
  const teddyIndex = Math.min(incorrectGuesses, maxGuesses);

  return (
    <div className="teddy-container">
      <img
        src={`/images/teddy${teddyIndex}.png`}
        alt="Teddy"
        className={`teddy ${incorrectGuesses > 0 ? "animated" : ""}`}
      />
    </div>
  );
};

export default Teddy;
