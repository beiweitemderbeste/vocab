interface WordDifficultySelectionProps {
  wordDifficulty: string;
  setWordDifficulty: (value: string) => void;
}

const WordDifficultySelection: React.FC<WordDifficultySelectionProps> = ({
  wordDifficulty,
  setWordDifficulty,
}) => {
  const handleWordDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWordDifficulty(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="wordDifficulty"
        className="mb-2 text-lg font-medium text-white"
      >
        word range:
      </label>
      <select
        id="wordDifficulty"
        value={wordDifficulty}
        onChange={handleWordDifficultyChange}
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value="a1">a1</option>
        <option value="a2">a2</option>
        <option value="b1">b1</option>
        <option value="b2">b2</option>
        <option value="c1">c1</option>
        <option value="c2">c2</option>
      </select>
    </div>
  );
};

export default WordDifficultySelection;
