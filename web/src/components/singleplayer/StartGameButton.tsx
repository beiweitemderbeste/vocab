import { useNavigate } from "react-router-dom";

interface StartGameButtonProps {
  sourceLanguage: string;
  targetLanguage: string;
  difficultyLevel: string;
  wordCategory: string;
  wordRange: string;
  gameLength: number;
}

const StartGameButton: React.FC<StartGameButtonProps> = ({
  sourceLanguage,
  targetLanguage,
  difficultyLevel,
  wordCategory,
  wordRange,
  gameLength,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/spgame", {
      state: {
        sourceLanguage,
        targetLanguage,
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
