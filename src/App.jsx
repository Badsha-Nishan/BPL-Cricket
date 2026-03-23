import "./App.css";
import navImg from "./assets/logo.png";
import Coin from "./assets/dollar-1.png";

function App() {
  return (
    <>
      <div className="navbar w-11/12 mx-auto mt-4">
        <div className="flex-1">
          <a className="text-xl">
            <img className="h-16 w-16" src={navImg} alt="Nave Logo" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-3">60000000000</span>
          <span className="mr-3">Coin</span>
          <img src={Coin} alt="Coin" />
        </div>
      </div>
    </>
  );
}

export default App;
