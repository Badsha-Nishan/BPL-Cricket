import React, { use } from "react";
import userImg from "../../assets/user-1.png";
import flagIcon from "../../assets/report-1.png";

const AvailablePlayers = ({ PlayerPromise }) => {
  const playerData = use(PlayerPromise);

  return (
    <div className="w-11/12 mx-auto mt-4 grid grid-cols-3 gap-12">
      {playerData.map((player, index) => (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img className="" src={player["player-img"]} alt="Shoes" />
          </figure>
          <div className="space-y-4 mt-4">
            <div className="flex items-center">
              <img className="mr-3" src={userImg} alt="User icon" />
              <h2 className="card-title">Virat Kohli</h2>
            </div>
            <div className="flex justify-between border-b-1 pb-2">
              <div className="flex items-center">
                <img className="mr-3" src={flagIcon} alt="FlagIcon" />
                <span>India</span>
              </div>
              <div>
                <button className="btn">All Rounder</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <span className="font-bold">Rating</span>
                <span>5</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Left-Hand-Bat</span>
                <span>Left-Hand-Bat</span>
              </div>
            </div>

            <div className="card-actions justify-between items-center">
              <span>Price: $12,000</span>
              <button className="btn btn-primary">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
