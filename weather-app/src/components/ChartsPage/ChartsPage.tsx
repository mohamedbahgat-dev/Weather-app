import "./ChartsPage.css";
import SideBar from "../SideBar/SideBar";
import ForecastDashboard from "../Forecasting/ForcastDashboard";

import { useCurrentWeather, useForcastData } from "../../Store.tsx";
import { useEffect, useState } from "react";
import { FetchForecasted } from "../../Services/FetchData";

const ChartsPage = () => {
  const { setForcastedData } = useForcastData();
  const { searchQuery } = useCurrentWeather();

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const term = searchQuery ? searchQuery : "paris";

  useEffect(() => {
    const getForeCastedtWeather = async () => {
      try {
        const response = await FetchForecasted(term);
        if (!response.ok) {
          setError("Error Fetching Data");
        } else {
          setError("");
          const data = await response.json();
          setForcastedData(data.forecast.forecastday);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
      } finally {
        setIsLoading(false);
      }
    };
    getForeCastedtWeather();
  }, [searchQuery]);

  if (error) {
    return <div>Error getting Data</div>;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="charts-dashboard">
      <section className="cherts-sidebar">
        <SideBar />
      </section>
      <section className="forecasted-dash">
        <ForecastDashboard />
      </section>
    </div>
  );
};

export default ChartsPage;
