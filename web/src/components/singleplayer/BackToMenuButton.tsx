import { Link } from "react-router-dom";

const BackToMenuButton = () => {
  return (
    <Link
      to="/"
      className="p-4 bg-purple-600 text-white text-xl font-bold shadow-lg rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
    >
      back to menu
    </Link>
  );
};

export default BackToMenuButton;
