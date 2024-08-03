import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchWords } from "../../utils/dataFetching";

const SinglePlayerGame = () => {
  const location = useLocation();
  const { sourceLanguage, targetLanguage, gameDifficulty, wordCategory, wordDifficulty, gameLength } =
    location.state;

  // default values:
  // sourceLanguage english
  // targetLanguage german
  // difficultyLevel easy
  // wordCategory adjectives
  // wordRange a1
  // gameLength 10

  const [targetLanguageWords, setTargetLanguageWords] = useState([]);

  useEffect(() => {
    const fetchAndSetWords = async () => {
      const words = await fetchWords(sourceLanguage, targetLanguage, wordCategory, wordDifficulty);
      setTargetLanguageWords(words);
    };

    fetchAndSetWords();
  }, [sourceLanguage, targetLanguage, wordCategory, wordDifficulty]);

  return (
    <>
      <p>source language: {sourceLanguage}</p>
      <p>target language: {targetLanguage}</p>
      <p>game difficulty: {gameDifficulty}</p>
      <p>word category: {wordCategory}</p>
      <p>word difficulty: {wordDifficulty}</p>
      <p>game length: {gameLength}</p>
      <ul>
        {targetLanguageWords.map((word) => (
          <li key={word.word}>{word.word}</li>
        ))}
      </ul>
    </>
  );
};

export default SinglePlayerGame;
