import GameSettingsHeading from "./GameSettingsHeading";
import LanguageSelection from "./LanguageSelection";
import DifficultySelection from "./DifficultySelection";
import CategorySelection from "./CategorySelection";
import RangeSelection from "./RangeSelection";
import LengthSelection from "./LengthSelection";

interface GameSettingsProps {
  languagePair: string;
  setLanguagePair: (value: string) => void;
  difficultyLevel: string;
  setDifficultyLevel: (value: string) => void;
  wordCategory: string;
  setWordCategory: (value: string) => void;
  wordRange: string;
  setWordRange: (value: string) => void;
  gameLength: number;
  setGameLength: (value: number) => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({ languagePair, setLanguagePair, difficultyLevel, setDifficultyLevel, wordCategory, setWordCategory, wordRange, setWordRange, gameLength, setGameLength}) => {
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
