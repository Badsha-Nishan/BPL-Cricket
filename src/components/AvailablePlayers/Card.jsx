import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagIcon from "../../assets/report-1.png";

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  const [selected, setSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("insufficient balance");
      return;
    }
    setSelected(true);
    setSelectedPlayers([...selectedPlayers, player])
  };
  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img className="w-full h-78" src={player.player_img} alt="Shoes" />
      </figure>
      <div className="space-y-4 mt-4">
        <div className="flex items-center">
          <img className="mr-3" src={userImg} alt="User icon" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="flex justify-between border-b-1 pb-2">
          <div className="flex items-center">
            <img className="mr-3" src={flagIcon} alt="FlagIcon" />
            <span>{player.player_country}</span>
          </div>
          <div>
            <button className="btn">{player.playing_role}</button>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <span className="font-bold">Rating</span>
            <span>{player.rating}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">{player.bating_style}</span>
            <span>{player.bowling_style}</span>
          </div>
        </div>

        <div className="card-actions justify-between items-center">
          <span>Price: ${player.price}</span>
          <button
            onClick={handleChoosePlayer}
            disabled={selected}
            className="btn btn-primary"
          >
            {selected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
