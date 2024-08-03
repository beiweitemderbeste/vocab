interface GameDifficultySelectionProps {
  gameDifficulty: string;
  setGameDifficulty: (value: string) => void;
}

const GameDifficultySelection: React.FC<GameDifficultySelectionProps> = ({
  gameDifficulty,
  setGameDifficulty,
}) => {
  const handleGameDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGameDifficulty(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="gameDifficulty"
        className="mb-2 text-lg font-medium text-white"
      >
        game difficulty:
      </label>
      <select
        id="gameDifficulty"
        value={gameDifficulty}
        onChange={handleGameDifficultyChange}
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
    </div>
  );
};

export default GameDifficultySelection;
