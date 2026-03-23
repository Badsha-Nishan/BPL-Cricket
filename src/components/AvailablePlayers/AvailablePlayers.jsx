import React, { use } from "react";

const AvailablePlayers = ({ PlayerPromise }) => {
  const PlayerData = use(PlayerPromise);
  console.log(PlayerData);
  return <div>
    
  </div>;
};

export default AvailablePlayers;
