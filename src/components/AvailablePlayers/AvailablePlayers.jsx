import React, { use } from "react";
import Players from "./Players";

const AvailablePlayers = ({ PlayerPromise }) => {
  const playerData = use(PlayerPromise);

  return <Players playersData={playerData}></Players>;
};

export default AvailablePlayers;
