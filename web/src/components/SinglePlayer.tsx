import TopBar from "./TopBar";
import SinglePlayerPreferences from "./SinglePlayerPreferences";

const SinglePlayer = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="game selection" />
      <SinglePlayerPreferences />
    </div>
  )
};

export default SinglePlayer;
