import React, { use, useState } from "react";
import Players from "./Players";

const AvailablePlayers = ({ PlayerPromise }) => {
  const playerData = use(PlayerPromise);
  const [selectedType, setSelectedType] = useState("available");

  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between mt-4">
        <h2 className="font-bold text-2xl">
          {selectedType === "available"
            ? "Available Players"
            : "Selected Player (4/6)"}
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
            Selected <span>(2)</span>{" "}
          </button>
        </div>
      </div>
      <Players playersData={playerData}></Players>;
    </>
  );
};

export default AvailablePlayers;
