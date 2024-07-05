import { Link } from "react-router-dom";

import TopBar from "./TopBar";

const MainMenu = () => {
  return (
    <>
      <TopBar />
      <button><Link to="/singleplayer">Singleplayer</Link></button>
      <button><Link to="/multiplayer">Multiplayer</Link></button>
    </>
  );
};

export default MainMenu;
