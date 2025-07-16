import "./CityTemp.css";
import { FetchCurrentWeather } from "../../Services/FetchData.tsx";
import { useEffect, useState } from "react";

const CityTemp = (props: any) => {
  const [cityTemp, setCityTemp] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCitytWeather = async () => {
      try {
        const response = await FetchCurrentWeather(props.city);
        if (!response.ok) {
          setError("Error Fetching Data");
        } else {
          setError("");
          const data = await response.json();
          setCityTemp(data.current);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
      } finally {
        setIsLoading(false);
      }
    };
    getCitytWeather();
  }, []);

  return (
    <section>
      {error ? (
        <div>Error fetching data</div>
      ) : (
        <div>
          {isLoading ? (
            <div>...Loading</div>
          ) : (
            <div className="city-temp">
              <div>
                <h2 className="city-temp-c">{cityTemp?.temp_c}°</h2>
                <p className="city-name">{props.city.toUpperCase()}</p>
              </div>
              <img src={cityTemp.condition.icon} alt="condition icon" />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CityTemp;
