import { Link } from "react-router-dom";

const StartGameButton = () => {
  return (
    <Link
      to="/spgame"
      className="p-4 mt-6 bg-purple-600 text-white text-xl font-bold shadow-lg rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer text-center"
    >
      start game
    </Link>
  );
};

export default StartGameButton;
