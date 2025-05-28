import NavBar from "./components/Navigation/NavBar";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import MetaDashboard from "./components/MetaData/MetaDashboard";
import SunMoon from "./components/SunMoonSummary/SunMoon";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainDashboard />
      <MetaDashboard />
      <SunMoon />
    </div>
  );
};

export default App;
