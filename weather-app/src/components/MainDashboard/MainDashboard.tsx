import { useEffect, useState } from "react";
import { WiCelsius } from "react-icons/wi";
import "./MainDashboard.css";
import sun from "./../../../public/sun.png";
import { FetchCurrentWeather } from "../../Services/FetchData.tsx";

const MainDashboard: React.FC = () => {
  const [datetime, setDatetime] = useState<Date>(new Date());
  const [searchTerm, setSearchTerm] = useState<string>("london");
  const [weatherData, setWeatherData] = useState<any>();
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCurrentWeather = async () => {
      try {
        const response = await FetchCurrentWeather(searchTerm);
        if (!response.ok) {
          setError("Error Fetching Data");
        }
        const data: any = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
      } finally {
        setLoading(false);
      }
    };
    getCurrentWeather();
  }, [searchTerm]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDatetime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  });

  return (
    <section className="dashboard">
      <div className="header">
        {loading ? <p>...Loading</p> : <p>{weatherData.location.name}</p>}
        <p>{datetime.toLocaleString()}</p>
      </div>
      <div className="temp-card">
        <img src={sun} alt="weather icon" />
        <div className="temp">
          <h3>30</h3>

          <WiCelsius size={30} />
        </div>
        <p>Weather note</p>
      </div>
      <article>Note about weather condition</article>
    </section>
  );
};

export default MainDashboard;
