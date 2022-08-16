import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MyAccount from "./pages/my-account/MyAccount";
import MyBrain from "./pages/my-brain/MyBrain";
import TrainMyBrain from "./pages/train-my-brain/TrainMyBrain";
import "./Body.css";
import LoginPage from "./pages/my-account/auth/LoginPage";

export default function Body() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-brain" element={<MyBrain />} />
          <Route path="/train-my-brain" element={<TrainMyBrain />} />
          <Route path="/my-account/auth" element={<LoginPage />} />

        </Routes>
      </Router>
    </div>
  );
}
