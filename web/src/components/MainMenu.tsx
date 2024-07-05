import TopBar from "./TopBar";
import MainMenuLink from "./MainMenuLink";

const MainMenu = () => {
  return (
    <>
      <TopBar heading="vocab" />
      <div className="bg-purple-100 min-h-screen pt-24 p-4 space-y-16">
        <MainMenuLink route="/singleplayer" title="singleplayer" />
        <MainMenuLink route="/multiplayer" title="multiplayer" />
      </div>
    </>
  );
};

export default MainMenu;
