import GameSettingsHeading from "./GameSettingsHeading";
import LanguageSelection from "./LanguageSelection";
import GameDifficultySelection from "./GameDifficultySelection";
import CategorySelection from "./CategorySelection";
import WordDifficultySelection from "./WordDifficultySelection";
import LengthSelection from "./LengthSelection";

interface GameSettingsProps {
  sourceLanguage: string;
  setSourceLanguage: (value: string) => void;
  targetLanguage: string;
  setTargetLanguage: (value: string) => void;
  gameDifficulty: string;
  setGameDifficulty: (value: string) => void;
  wordCategory: string;
  setWordCategory: (value: string) => void;
  wordDifficulty: string;
  setWordDifficulty: (value: string) => void;
  gameLength: number;
  setGameLength: (value: number) => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({
  sourceLanguage,
  setSourceLanguage,
  targetLanguage,
  setTargetLanguage,
  gameDifficulty,
  setGameDifficulty,
  wordCategory,
  setWordCategory,
  wordDifficulty,
  setWordDifficulty,
  gameLength,
  setGameLength,
}) => {
  return (
    <div className="p-6 space-y-4 bg-purple-600 mt-10 rounded-lg shadow-lg w-80 max-w-md">
      <GameSettingsHeading heading="game settings" />
      <LanguageSelection
        sourceLanguage={sourceLanguage}
        setSourceLanguage={setSourceLanguage}
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
      />
      <GameDifficultySelection
        gameDifficulty={gameDifficulty}
        setGameDifficulty={setGameDifficulty}
      />
      <CategorySelection
        wordCategory={wordCategory}
        setWordCategory={setWordCategory}
      />
      <WordDifficultySelection
        wordDifficulty={wordDifficulty}
        setWordDifficulty={setWordDifficulty}
      />
      <LengthSelection gameLength={gameLength} setGameLength={setGameLength} />
    </div>
  );
};

export default GameSettings;
