import { Link } from "react-router-dom";

interface MainMenuLinkProps {
  route: string;
  title: string;
}

const MainMenuLink: React.FC<MainMenuLinkProps> = ({ route, title }) => {
  return (
    <div className="p-4 bg-purple-600 text-white shadow-lg rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer mx-auto w-80">
      <Link to={route} className="block py-8 text-center font-semibold text-xl">
        {title}
      </Link>
    </div>
  );
};

export default MainMenuLink;
