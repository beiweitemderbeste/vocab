import TopBar from "./TopBar";
import SinglePlayerGameSettings from "./SinglePlayerGameSettings";

const SinglePlayer = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="single player" />
      <SinglePlayerGameSettings />
    </div>
  )
};

export default SinglePlayer;
