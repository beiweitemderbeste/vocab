import TopBar from "./TopBar";
import MainMenuLink from "./MainMenuLink";

const MainMenu = () => {
  return (
    <>
      <TopBar />
      <div className="bg-purple-100 min-h-screen pt-24 p-4 space-y-16">
        <MainMenuLink route="/singleplayer" title="Singleplayer" />
        <MainMenuLink route="/multiplayer" title="Multiplayer" />
      </div>
    </>
  );
};

export default MainMenu;
