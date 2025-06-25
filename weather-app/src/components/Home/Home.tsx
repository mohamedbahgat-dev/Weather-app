import MainDashboard from "../MainDashboard/MainDashboard";
import MetaDashboard from "../MetaData/MetaDashboard";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import PolyData from "../PolyData/PolyData";
import NavBar from "../Navigation/NavBar";
import CitiesTemp from "../CitiesTemp/CitiesTemp";

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
      <section className="polydata">
        <PolyData />
      </section>
      <section className="other-cities">
        <CitiesTemp />
      </section>
    </div>
  );
};

export default Home;
