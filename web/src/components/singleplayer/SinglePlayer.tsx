import TopBar from "../TopBar";
import GameSettings from "./GameSettings";

const SinglePlayer = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="single player" />
      <GameSettings />
    </div>
  );
};

export default SinglePlayer;
