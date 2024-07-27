import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { supabase } from "../../supabaseClient";

const SinglePlayerGame = () => {
  const location = useLocation();
  const { sourceLanguage, targetLanguage, difficultyLevel, wordCategory, wordRange, gameLength } =
    location.state;

  

  const [englishAdjectives, setEnglishAdjectives] = useState([]);

  useEffect(() => {
    getEnglishAdjectives();
  }, []);

  async function getEnglishAdjectives() {
    const { data } = await supabase.from("english_adjectives").select();
    setEnglishAdjectives(data);
  }

  return (
    <>
      <p>source language: {sourceLanguage}</p>
      <p>target language: {targetLanguage}</p>
      <p>difficulty level: {difficultyLevel}</p>
      <p>word category: {wordCategory}</p>
      <p>word range: {wordRange}</p>
      <p>game length: {gameLength}</p>
      <ul>
        {englishAdjectives.map((adjective) => (
          <li key={adjective.word}>{adjective.word}</li>
        ))}
      </ul>
    </>
  );
};

export default SinglePlayerGame;
