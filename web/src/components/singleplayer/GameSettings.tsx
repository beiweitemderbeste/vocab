import { useState } from "react";

import GameSettingsHeading from "./GameSettingsHeading";
import LanguageSelection from "./LanguageSelection";
import DifficultySelection from "./DifficultySelection";
import CategorySelection from "./CategorySelection";
import RangeSelection from "./RangeSelection";
import LengthSelection from "./LengthSelection";

const GameSettings = () => {
  const [languagePair, setLanguagePair] = useState<string>("english - german");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("easy");
  const [wordCategory, setWordCategory] = useState<string>("adjectives");
  const [wordRange, setWordRange] = useState<string>("a1");
  const [gameLength, setGameLength] = useState<number>(10);

  return (
    <div className="p-6 space-y-4 bg-purple-600 mt-10 rounded-lg shadow-lg w-80 max-w-md">
      <GameSettingsHeading heading="game settings" />
      <LanguageSelection
        languagePair={languagePair}
        setLanguagePair={setLanguagePair}
      />
      <DifficultySelection
        difficultyLevel={difficultyLevel}
        setDifficultyLevel={setDifficultyLevel}
      />
      <CategorySelection wordCategory={wordCategory} setWordCategory={setWordCategory} />
      <RangeSelection wordRange={wordRange} setWordRange={setWordRange} />
      <LengthSelection gameLength={gameLength} setGameLength={setGameLength} />
    </div>
  );
};

export default GameSettings;
