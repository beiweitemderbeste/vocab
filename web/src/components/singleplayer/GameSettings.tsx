import { useState } from "react";

import GameSettingsHeading from "./GameSettingsHeading";
import LanguageSelection from "./LanguageSelection";
import DifficultySelection from "./DifficultySelection";
import RangeSelection from "./RangeSelection";
import LengthSelection from "./LengthSelection";

const GameSettings = () => {
  const [languagePair, setLanguagePair] = useState<string>("english - german");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("easy");
  const [wordRange, setWordRange] = useState<string>("a1");
  const [gameLength, setGameLength] = useState<number>(10);

  return (
    <div className="mx-10 p-6 space-y-4 bg-purple-600 mt-10 rounded-lg shadow-lg">
      <GameSettingsHeading heading="game settings" />
      <LanguageSelection
        languagePair={languagePair}
        setLanguagePair={setLanguagePair}
      />
      <DifficultySelection
        difficultyLevel={difficultyLevel}
        setDifficultyLevel={setDifficultyLevel}
      />
      <RangeSelection wordRange={wordRange} setWordRange={setWordRange} />
      <LengthSelection gameLength={gameLength} setGameLength={setGameLength} />
    </div>
  );
};

export default GameSettings;
