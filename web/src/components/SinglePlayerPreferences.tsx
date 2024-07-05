import { useState } from "react";

const SinglePlayerPreferences = () => {
  const [languagePair, setLanguagePair] = useState<string>("English - German");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("Easy");
  const [wordRange, setWordRange] = useState<string>("A1");
  const [gameLength, setGameLength] = useState<number>(10);

  const handleLanguagePairChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguagePair(event.target.value);
  };

  const handleDifficultyLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficultyLevel(event.target.value);
  };

  const handleWordRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWordRange(event.target.value);
  };

  const handleGameLengthChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGameLength(Number(event.target.value));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">game preferences</h1>
      <div className="flex items-center">
        <label htmlFor="languagePair" className="mr-2">
          Language Pair:
        </label>
        <select
          id="languagePair"
          value={languagePair}
          onChange={handleLanguagePairChange}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="English - German">English - German</option>
          <option value="Spanish - French">Spanish - French</option>
          {/* Add more language pair options as needed */}
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="difficultyLevel" className="mr-2">
          Difficulty Level:
        </label>
        <select
          id="difficultyLevel"
          value={difficultyLevel}
          onChange={handleDifficultyLevelChange}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="wordRange" className="mr-2">
          Word Range:
        </label>
        <select
          id="wordRange"
          value={wordRange}
          onChange={handleWordRangeChange}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="gameLength" className="mr-2">
          Game Length:
        </label>
        <select
          id="gameLength"
          value={gameLength}
          onChange={handleGameLengthChange}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        <span className="ml-2">words</span>
      </div>
    </div>
  );
};

export default SinglePlayerPreferences;
