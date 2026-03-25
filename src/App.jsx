import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";
import Banner from "./components/NavBar/Banner";
import Footer from "./components/Footer";

const FetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [coin, setCoin] = useState(50000);
  const PlayerPromise = FetchPlayers();
  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="text-center">
            <span className="loading loading-spinner text-error"></span>
          </div>
        }
      >
        <AvailablePlayers
          PlayerPromise={PlayerPromise}
          setCoin={setCoin}
          coin={coin}
        ></AvailablePlayers>
      </Suspense>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
