import { useLocation } from "react-router-dom";

const SinglePlayerGame = () => {
  const location = useLocation();
  const { languagePair, difficultyLevel, wordCategory, wordRange, gameLength } =
    location.state;

  return (
    <>
      <p>language pair: {languagePair}</p>
      <p>difficulty level: {difficultyLevel}</p>
      <p>word category: {wordCategory}</p>
      <p>word range: {wordRange}</p>
      <p>game length: {gameLength}</p>
    </>
  );
};

export default SinglePlayerGame;
