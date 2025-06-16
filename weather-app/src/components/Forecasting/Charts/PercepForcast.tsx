import "./PercepForcast.css";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { useForcastData, useCurrentWeather } from "../../../Store";
import { Bar } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  Filler,
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  Filler
);
const PercepForcast = () => {
  const { forcastedData } = useForcastData();
  const { currentWeather } = useCurrentWeather();

  const barCahrtData: any = {
    labels: [
      "1AM",
      "2AM",
      "3AM",
      "4AM",
      "5AM",
      "6AM",
      "7AM",
      "8AM",
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
      "6PM",
      "7PM",
      "8PM",
      "9PM",
      "10PM",
      "11PM",
      "12AM",
    ],
    datasets: [
      {
        label: false,
        data: forcastedData[0].hour.map((cast: any) => cast.precip_mm),
        fill: true,
        borderColor: "rgb(255, 195, 99)",
        backgroundColor: "rgba(136, 191, 223, 0.81)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    tooltip: {
      enabled: false, // Disable tooltips
    },
    datalabels: {
      display: true, // Enable data labels
      anchor: "end", // Position the labels at the end of the line
      align: "top", // Align the labels to the top of the points
      formatter: (value: any) => value, // Show the value as the label
      font: {
        size: 12,
      },
    },
    elements: {
      point: {
        pointRadius: 2,
        pointStyle: "triangle",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <section>
      <div className="pericept">
        <p>Precipitation Probability </p>
        <p>{forcastedData[0].day.totalprecip_mm} mm</p>
        <p>{}</p>
      </div>

      <div>
        {forcastedData[0].day.totalprecip_mm === 0 ? (
          <h3 className="no-rain-alert">There are no rain Today</h3>
        ) : (
          <div className="bar-chart">
            <Bar options={options} data={barCahrtData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PercepForcast;
