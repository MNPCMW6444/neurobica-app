import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyBrain from "./pages/MyBrain";
import TrainMyBrain from "./pages/TrainMyBrain";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-brain" element={<MyBrain />} />
          <Route path="/train-my-brain" element={<TrainMyBrain />} />
        </Routes>
      </Router>
    </div>
  );
}
