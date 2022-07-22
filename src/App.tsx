import "./App.css";
const { Sidebar, SidebarItem } = require("react-responsive-sidebar");

const pages = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];

function App() {
  return (
    <div className="App">
      <Sidebar content={pages}></Sidebar>
    </div>
  );
}

export default App;
