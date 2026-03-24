import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const FetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const PlayerPromise = FetchPlayers();
  return (
    <>
      <NavBar></NavBar>
      <Suspense
        fallback={<div className="text-center"><span className="loading loading-spinner text-error"></span></div>}
      >
        <AvailablePlayers PlayerPromise={PlayerPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
