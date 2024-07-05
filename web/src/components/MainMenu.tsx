import { Link } from "react-router-dom";

import TopBar from "./TopBar";

const MainMenu = () => {
  return (
    <>
      <TopBar />
      <Link to="/singleplayer">Singleplayer</Link>
      <Link to="/multiplayer">Multiplayer</Link>
    </>
  );
};

export default MainMenu;
