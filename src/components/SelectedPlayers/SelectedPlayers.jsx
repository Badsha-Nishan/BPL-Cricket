import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
  const emptyPlayers = () => {
    if(selectedPlayers.length === 0) {
        <div>
            <h2>No Selected</h2>
        </div>
    }
  }
  return (
    <div>
      {selectedPlayers.map((player, index) => {
        return (
          <div
            key={index}
            className="border rounded-md mb-4 w-11/12 mx-auto mt-5 flex justify-between items-center p-4"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-[75px] h-auto rounded-md"
                src={player.player_img}
                alt={player.player_name}
              />
              <div>
                <h2 className="flex items-center gap-3 text-xl font-bold">
                  <FaUser /> {player.player_name}
                </h2>
                <p>{player.playing_role}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleDeletePlayer(player);
                }}
                className="btn text-xl text-red-500"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
