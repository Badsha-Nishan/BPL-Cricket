import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCards = ({ player, handleDeletePlayer }) => {
  return (
    <div className="border rounded-md mb-4 w-11/12 mx-auto mt-5 flex justify-between items-center p-4">
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
};

export default SelectedCards;
