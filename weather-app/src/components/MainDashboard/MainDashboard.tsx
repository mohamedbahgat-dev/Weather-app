import { useEffect, useState } from "react";
import { WiCelsius } from "react-icons/wi";
import "./MainDashboard.css";
import sun from "./../../../public/sun.png";

const MainDashboard: React.FC = () => {
  const [datetime, setDatetime] = useState<Date>(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDatetime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  });

  return (
    <section className="dashboard">
      <div className="header">
        <p>Current Weather</p>
        <p>{datetime.toLocaleTimeString()}</p>
      </div>
      <div className="temp-card">
        <img src={sun} alt="weather icon" />
        <div className="temp">
          <h1>30</h1>
          <WiCelsius size={30} />
        </div>
        <p>Weather note</p>
      </div>
      <article>Note about weather condition</article>
    </section>
  );
};

export default MainDashboard;
