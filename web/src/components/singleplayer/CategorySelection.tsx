interface CategorySelectionProps {
  wordCategory: string;
  setWordCategory: (value: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ wordCategory, setWordCategory }) => {
  const handleWordCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWordCategory((event.target.value));
  };
  
  return (<div className="flex flex-col">
    <label
      htmlFor="wordCategory"
      className="mb-2 text-lg font-medium text-white"
    >
      word category:
    </label>
    <select
      id="wordCategory"
      value={wordCategory}
      onChange={handleWordCategoryChange}
      className="px-3 py-2 border border-purple-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-500 transition duration-200"
    >
      <option value="adjectives">adjectives</option>
      <option value="nouns">nouns</option>
    </select>
  </div>)
}

export default CategorySelection