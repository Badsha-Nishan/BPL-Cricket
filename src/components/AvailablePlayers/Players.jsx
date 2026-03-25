import Card from "./Card";

const Players = ({
  playersData,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="w-11/12 mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {playersData.map((player, index) => (
        <Card
          key={index}
          player={player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Card>
      ))}
    </div>
  );
};

export default Players;
