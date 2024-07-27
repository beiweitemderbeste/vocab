interface LanguageSelectionProps {
  sourceLanguage: string;
  setSourceLanguage: (value: string) => void;
  targetLanguage: string;
  setTargetLanguage: (value: string) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({
  sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage
}) => {

  const handleSourceLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSourceLanguage(event.target.value);
  };

  const handleTargetLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTargetLanguage(event.target.value);
  };

  return (
    <>
    <div className="flex flex-col">
      <label
        htmlFor="sourceLanguage"
        className="mb-2 text-lg font-medium text-white"
      >
        source language:
      </label>
      <select
        id="sourceLanguage"
        value={sourceLanguage}
        onChange={handleSourceLanguageChange}
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value="english">english</option>
        <option value="german">german</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label
        htmlFor="targetLanguage"
        className="mb-2 text-lg font-medium text-white"
      >
        target language:
      </label>
      <select
        id="targetLanguage"
        value={targetLanguage}
        onChange={handleTargetLanguageChange}
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value="german">german</option>
        <option value="english">english</option>
      </select>
    </div>
    </>
  );
};

export default LanguageSelection;
