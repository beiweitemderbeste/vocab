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
  gameDifficulty: string;
  setGameDifficulty: (value: string) => void;
  wordCategory: string;
  setWordCategory: (value: string) => void;
  wordDifficulty: string;
  setWordDifficulty: (value: string) => void;
  gameLength: number;
  setGameLength: (value: number) => void;
}

const SinglePlayer: React.FC<SinglePlayerProps> = () => {
  const [sourceLanguage, setSourceLanguage] = useState("english");
  const [targetLanguage, setTargetLanguage] = useState("german");
  const [gameDifficulty, setGameDifficulty] = useState("easy");
  const [wordCategory, setWordCategory] = useState("adjectives");
  const [wordDifficulty, setWordDifficulty] = useState("a1");
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
          gameDifficulty={gameDifficulty}
          setGameDifficulty={setGameDifficulty}
          wordCategory={wordCategory}
          setWordCategory={setWordCategory}
          wordDifficulty={wordDifficulty}
          setWordDifficulty={setWordDifficulty}
          gameLength={gameLength}
          setGameLength={setGameLength}
        />
        <div className="flex space-x-4">
          <BackToMenuButton />
          <StartGameButton
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            gameDifficulty={gameDifficulty}
            wordCategory={wordCategory}
            wordDifficulty={wordDifficulty}
            gameLength={gameLength}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
