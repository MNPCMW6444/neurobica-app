import "./App.css";
const { Sidebar, SidebarItem } = require("react-responsive-sidebar");
enum NeurobicaColors {
  Main = "#F9A645",
  Second = "#000000",
  Third = "#FFFFFF",
}
const pages = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];

function App() {
  return (
    <div className="App">
      <Sidebar
        content={pages}
        background={NeurobicaColors.Main}
        color={NeurobicaColors.Second}
      ></Sidebar>
    </div>
  );
}

export default App;
