import MainDashboard from "../MainDashboard/MainDashboard";
import MetaDashboard from "../MetaData/MetaDashboard";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

import NavBar from "../Navigation/NavBar";

const Home = () => {
  return (
    <div className="container">
      <section className="navbar">
        <NavBar />
      </section>
      <section className="sidebar">
        <SideBar />
      </section>
      <section className="main">
        <MainDashboard />
        <MetaDashboard />
      </section>
    </div>
  );
};

export default Home;
