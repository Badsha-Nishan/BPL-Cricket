import React, { use, useState } from "react";
import Players from "./Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const AvailablePlayers = ({ PlayerPromise, setCoin, coin }) => {
  const playerData = use(PlayerPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between mt-4">
        <h2 className="font-bold text-2xl">
          {selectedType === "available"
            ? "Available Players"
            : `Selected Player (${playerData.length}/${selectedPlayers.length})`}
        </h2>
        <div>
          <button
            onClick={() => {
              setSelectedType("available");
            }}
            className={`btn ${
              selectedType === "available" ? "bg-amber-400" : ""
            }  rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setSelectedType("selected");
            }}
            className={`btn ${
              selectedType === "selected" ? "bg-amber-400" : ""
            }  rounded-l-none`}
          >
            Selected <span>({selectedPlayers.length})</span>{" "}
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <Players
          playersData={playerData}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Players>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
      )}
    </>
  );
};

export default AvailablePlayers;
