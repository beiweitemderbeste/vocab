import TopBar from "../TopBar";
import GameSettings from "./GameSettings";
import StartGameButton from "./StartGameButton";
import BackToMenuButton from "./BackToMenuButton";

const SinglePlayer = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="single player" />
      <div className="flex flex-col items-center space-y-6">
        <GameSettings />
        <div className="flex space-x-4">
          <BackToMenuButton />
          <StartGameButton />
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
