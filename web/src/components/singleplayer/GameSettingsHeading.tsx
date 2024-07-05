interface GameSettingsHeadingProps {
  heading: string;
}

const GameSettingsHeading: React.FC<GameSettingsHeadingProps> = ({ heading }) => {
  return (
    <h1 className="text-4xl font-bold text-center text-white">{heading}</h1>
  );
};

export default GameSettingsHeading;
