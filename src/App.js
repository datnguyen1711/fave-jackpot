import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClaimReward from "./pages/ClaimReward/ClaimReward";
import GamePlay from "./pages/GamePlay/GamePlay";
import PreGame from "./pages/Pregame/PreGame";
import DoneReward from "./pages/DoneReward/DoneReward";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  return (
    <div className="App">
      <Routes getUserConfirmation={() => {}}>
        <Route path="/" element={<PreGame />} />
        <Route path="/playgame" element={<GamePlay />} />
        <Route path="/confirm" element={<ClaimReward />} />
        <Route path="/done-confirm" element={<DoneReward />} />
      </Routes>
    </div>
  );
}

export default App;
