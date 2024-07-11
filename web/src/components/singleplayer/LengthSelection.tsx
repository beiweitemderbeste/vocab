interface LengthSelectionProps {
  gameLength: number;
  setGameLength: (value: number) => void;
}

const LengthSelection: React.FC<LengthSelectionProps> = ({
  gameLength,
  setGameLength,
}) => {
  
  const handleGameLengthChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGameLength(Number(event.target.value));
  };

  return (
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
        className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <span className="mt-2 text-white">words</span>
    </div>
  );
};

export default LengthSelection;
