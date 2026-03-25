import React from "react";
import SelectedCards from "../AvailablePlayers/SelectedCards";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeletePlayer = (player) => {
    const filteredPlayer = selectedPlayers.filter(
      (playerInfo) => playerInfo.player_name !== player.player_name
    );
    setSelectedPlayers(filteredPlayer);
    const restCoin = coin + player.price;
    setCoin(restCoin);
  };
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="flex justify-center items-center flex-col mt-14">
          <h2 className="text-2xl font-bold mb-3">No Player Selected Yet</h2>
          <p>Go to available tab to select players</p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => (
          <SelectedCards
            key={index}
            player={player}
            handleDeletePlayer={handleDeletePlayer}
          ></SelectedCards>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
