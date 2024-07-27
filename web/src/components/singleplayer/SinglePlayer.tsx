import { useState } from "react";

import TopBar from "../TopBar";
import GameSettings from "./GameSettings";
import StartGameButton from "./StartGameButton";
import BackToMenuButton from "./BackToMenuButton";

interface SinglePlayerProps {
  sourceLanguage: string;
  setSourceLanguage: (value: string) => void;
  targetLanguage: string;
  setTargetLanguage: (value: string) => void;
  difficultyLevel: string;
  setDifficultyLevel: (value: string) => void;
  wordCategory: string;
  setWordCategory: (value: string) => void;
  wordRange: string;
  setWordRange: (value: string) => void;
  gameLength: number;
  setGameLength: (value: number) => void;
}

const SinglePlayer: React.FC<SinglePlayerProps> = () => {
  const [sourceLanguage, setSourceLanguage] = useState("english");
  const [targetLanguage, setTargetLanguage] = useState("german");
  const [difficultyLevel, setDifficultyLevel] = useState("easy");
  const [wordCategory, setWordCategory] = useState("adjectives");
  const [wordRange, setWordRange] = useState("a1");
  const [gameLength, setGameLength] = useState(10);

  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="single player" />
      <div className="flex flex-col items-center space-y-6">
        <GameSettings
          sourceLanguage={sourceLanguage}
          setSourceLanguage={setSourceLanguage}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          difficultyLevel={difficultyLevel}
          setDifficultyLevel={setDifficultyLevel}
          wordCategory={wordCategory}
          setWordCategory={setWordCategory}
          wordRange={wordRange}
          setWordRange={setWordRange}
          gameLength={gameLength}
          setGameLength={setGameLength}
        />
        <div className="flex space-x-4">
          <BackToMenuButton />
          <StartGameButton
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            difficultyLevel={difficultyLevel}
            wordCategory={wordCategory}
            wordRange={wordRange}
            gameLength={gameLength}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
