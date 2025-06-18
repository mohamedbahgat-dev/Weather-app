import Home from "./components/Home/Home";

import "./App.css";
import SideBar from "./components/SideBar/SideBar";

const App = () => (
  <>
    <div className="dashboard-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="home-dashboard">
        <Home />
      </div>
    </div>
  </>
);

export default App;
