interface RangeSelectionProps {
  wordRange: string;
  setWordRange: (value: string) => void;
}

const RangeSelection: React.FC<RangeSelectionProps> = ({ wordRange, setWordRange}) => {
  const handleWordRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWordRange(event.target.value);
  };

  return (
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
  )
}

export default RangeSelection