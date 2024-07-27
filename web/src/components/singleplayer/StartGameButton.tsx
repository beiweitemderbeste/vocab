import { useNavigate } from "react-router-dom";

interface StartGameButtonProps {
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

const StartGameButton: React.FC<StartGameButtonProps> = ({
  languagePair,
  difficultyLevel,
  wordCategory,
  wordRange,
  gameLength,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/spgame", {
      state: {
        languagePair,
        difficultyLevel,
        wordCategory,
        wordRange,
        gameLength,
      },
    });
  };

  return (
    <button
      onClick={handleClick}
      className="p-4 bg-purple-600 text-white text-xl font-bold shadow-lg rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
    >
      start game
    </button>
  );
};

export default StartGameButton;
