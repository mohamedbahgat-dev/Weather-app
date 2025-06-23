import { useEffect, useState } from "react";
import "./MainDashboard.css";
import { FetchCurrentWeather } from "../../Services/FetchData.tsx";
import { useCurrentWeather, useForcastData } from "../../Store.tsx";

const MainDashboard: React.FC = () => {
  const { currentWeather, searchQuery, setCurrentWeather, setLocation } =
    useCurrentWeather();
  const { forcastedData } = useForcastData();

  const [datetime, setDatetime] = useState<Date>(new Date());
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const term = searchQuery ? searchQuery : "paris";

  useEffect(() => {
    console.log(currentWeather);
  }, [currentWeather]);

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
              <div className="main-dashboard-container">
                <section className="datetime-temp-container">
                  {/* date  */}
                  <section className="datetime-container">
                    <div className="datetime-card">
                      <h2>{daysOfWeek[datetime.getDay()]}</h2>
                      <p className="date">
                        {`${datetime.getDate().toString().padStart(2, "0")} `}
                        {`${monthsNames[datetime.getMonth() + 1]}, `}
                        {datetime.getFullYear()}
                      </p>
                      <p>
                        {hours}:
                        {datetime.getMinutes().toString().padStart(2, "0")}{" "}
                        {meridiem}
                      </p>
                    </div>
                  </section>

                  {/* current temp */}

                  <section className="current-temp-container">
                    <div className="temp-card">
                      <img src={currentWeather?.condition.icon} alt="" />
                      <h2 className="temp">{currentWeather?.temp_c}°C</h2>
                    </div>
                    <div className="minmax-temp">
                      <p>
                        Min: <span>{forcastedData[0]?.day.mintemp_c}°</span>
                      </p>
                      <p>
                        Max: <span>{forcastedData[0]?.day.maxtemp_c}°</span>
                      </p>
                    </div>
                  </section>
                </section>

                <section className="hourly-temp">
                  <div>
                    <p>04:00</p>
                    <img
                      src={forcastedData[0]?.hour[4].condition.icon}
                      alt="icon"
                    />
                    <h3>{forcastedData[0]?.hour[4].temp_c}°</h3>
                  </div>
                  <div>
                    <p>08:00</p>
                    <img
                      src={forcastedData[0]?.hour[8].condition.icon}
                      alt="icon"
                    />
                    <h3>{forcastedData[0]?.hour[8].temp_c}°</h3>
                  </div>
                  <div>
                    <p>12:00</p>
                    <img
                      src={forcastedData[0]?.hour[12].condition.icon}
                      alt="icon"
                    />
                    <h3>{forcastedData[0]?.hour[12].temp_c}°</h3>
                  </div>
                  <div>
                    <p>16:00</p>
                    <img
                      src={forcastedData[0]?.hour[16].condition.icon}
                      alt="icon"
                    />
                    <h3>{forcastedData[0]?.hour[16].temp_c}°</h3>
                  </div>
                  <div>
                    <p>20:00</p>
                    <img
                      src={forcastedData[0]?.hour[20].condition.icon}
                      alt="icon"
                    />
                    <h3>{forcastedData[0]?.hour[20].temp_c}°</h3>
                  </div>
                  <p className="feels">
                    Feels like <span>{currentWeather.feelslike_c}°</span>
                  </p>
                </section>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainDashboard;
