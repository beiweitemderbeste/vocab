import { useState } from "react";

const SinglePlayerGameSettings = () => {
  const [languagePair, setLanguagePair] = useState<string>("english - german");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("easy");
  const [wordRange, setWordRange] = useState<string>("a1");
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
    <div className="mx-10 p-6 space-y-6 bg-purple-600 mt-10 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-white">
        game settings
      </h1>

      <div className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="languagePair"
            className="mb-2 text-lg font-medium text-white"
          >
            language pair:
          </label>
          <select
            id="languagePair"
            value={languagePair}
            onChange={handleLanguagePairChange}
            className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="english - german">english - german</option>
            <option value="spanish - french">spanish - french</option>
            {/* Add more language pair options as needed */}
          </select>
        </div>

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
            className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="wordRange"
            className="mb-2 text-lg font-medium text-white"
          >
            word range:
          </label>
          <select
            id="wordRange"
            value={wordRange}
            onChange={handleWordRangeChange}
            className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="a1">a1</option>
            <option value="a2">a2</option>
            <option value="b1">b1</option>
            <option value="b2">b2</option>
            <option value="c1">c1</option>
            <option value="c2">c2</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="gameLength"
            className="mb-2 text-lg font-medium text-white"
          >
            game length:
          </label>
          <select
            id="gameLength"
            value={gameLength}
            onChange={handleGameLengthChange}
            className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          <span className="mt-2 text-white">words</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerGameSettings;
