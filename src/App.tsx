import "./App.css";
import Body from "./components/Body";
import BottomBar from "./components/BottomBar";
import StatusBar from "./components/pages/global-components/status-bar/StatusBar";

function App() {
  return <>
  <div className="top">
   <StatusBar />
  </div>
  <br>
  </br>
  <div>
    <Body />
  </div>
  <BottomBar />;
  </>
}

export default App;
