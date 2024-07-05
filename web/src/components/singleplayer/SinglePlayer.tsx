import TopBar from "../TopBar";
import GameSettings from "./GameSettings";
import StartGameButton from "./StartGameButton";

const SinglePlayer = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="single player" />
      <div className="flex flex-col items-center">
        <GameSettings />
        <StartGameButton />
      </div>
    </div>
  );
};

export default SinglePlayer;
