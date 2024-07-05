interface DifficultySelectionProps {
  difficultyLevel: string;
  setDifficultyLevel: (value: string) => void;
}

const DifficultySelection: React.FC<DifficultySelectionProps> = ({
  difficultyLevel,
  setDifficultyLevel,
}) => {
  const handleDifficultyLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficultyLevel(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="difficultyLevel"
        className="mb-2 text-lg font-medium text-white"
      >
        difficulty level:
      </label>
      <select
        id="difficultyLevel"
        value={difficultyLevel}
        onChange={handleDifficultyLevelChange}
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
    </div>
  );
};

export default DifficultySelection;
