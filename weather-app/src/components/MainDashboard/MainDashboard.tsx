import { useEffect, useState } from "react";
import { WiCelsius } from "react-icons/wi";
import "./MainDashboard.css";
import { FetchCurrentWeather } from "../../Services/FetchData.tsx";
import { useCurrentWeather } from "../../Store.tsx";

const MainDashboard: React.FC = () => {
  const { currentWeather, searchQuery, setCurrentWeather, setLocation } =
    useCurrentWeather();
  const [datetime, setDatetime] = useState<Date>(new Date());

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const term = searchQuery ? searchQuery : "paris";

  useEffect(() => {
    const getCurrentWeather = async () => {
      try {
        const response = await FetchCurrentWeather(term);
        if (!response.ok) {
          setError("Error Fetching Data");
        } else {
          setError("");
          const data = await response.json();
          setCurrentWeather(data.current);
          setLocation(data.location);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentWeather();
  }, [searchQuery]);

  let hours: number | string = datetime.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, "0");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDatetime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  });

  return (
    <section className="dashboard">
      <div className="header">
        {error ? (
          <div>{error}</div>
        ) : (
          <div>
            {isLoading ? (
              <div>...Loading</div>
            ) : (
              <div>
                <p>
                  {datetime.getDate().toString().padStart(2, "0")}-
                  {(datetime.getMonth() + 1).toString().padStart(2, "0")}-
                  {datetime.getFullYear()}
                </p>
                <p>
                  {hours}:{datetime.getMinutes().toString().padStart(2, "0")}:
                  {datetime.getSeconds().toString().padStart(2, "0")} {meridiem}
                </p>
                <div className="temp-card">
                  <img src={currentWeather.condition.icon} alt="weather icon" />
                  <div className="temp">
                    <h3>{currentWeather.temp_c}</h3>

                    <WiCelsius size={30} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p>{currentWeather.condition.text}</p>
                    <p style={{ width: "120px" }}>
                      feels like {currentWeather.feelslike_c} °C
                    </p>
                  </div>
                </div>
                <article>Alerts</article>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainDashboard;
