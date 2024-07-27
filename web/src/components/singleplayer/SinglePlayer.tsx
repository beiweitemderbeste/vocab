import { useState } from "react";

import TopBar from "../TopBar";
import GameSettings from "./GameSettings";
import StartGameButton from "./StartGameButton";
import BackToMenuButton from "./BackToMenuButton";

interface SinglePlayerProps {
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

const SinglePlayer: React.FC<SinglePlayerProps> = () => {
  const [languagePair, setLanguagePair] = useState<string>("english - german");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("easy");
  const [wordCategory, setWordCategory] = useState<string>("adjectives");
  const [wordRange, setWordRange] = useState<string>("a1");
  const [gameLength, setGameLength] = useState<number>(10);

  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="single player" />
      <div className="flex flex-col items-center space-y-6">
        <GameSettings
          languagePair={languagePair}
          setLanguagePair={setLanguagePair}
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
            languagePair={languagePair}
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
