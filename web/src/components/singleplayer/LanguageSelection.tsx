interface LanguageSelectionProps {
  languagePair: string;
  setLanguagePair: (value: string) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({
  languagePair,
  setLanguagePair,
}) => {
  const handleLanguagePairChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguagePair(event.target.value);
  };

  return (
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
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value="english - german">english - german</option>
        <option value="spanish - french">spanish - french</option>
      </select>
    </div>
  );
};

export default LanguageSelection;
