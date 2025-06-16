import "./MinMaxTemp.css";

import { useForcastData } from "../../../../Store";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  Filler,
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  Filler
);

const MinMaxTemp = () => {
  const { forcastedData } = useForcastData();

  const lineCahrtData: any = {
    labels: ["Today", "Towmorrow", "After tomorrow"],
    datasets: [
      {
        label: "Max Temp",
        data: forcastedData.map((cast: any) => cast.day.maxtemp_c),
        borderColor: "rgb(241, 154, 151)",
        tension: 0.4,
      },
      {
        label: "Min Temp",

        data: forcastedData.map((cast: any) => cast.day.mintemp_c),
        borderColor: "rgb(151, 223, 241)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    elements: {
      point: {
        pointRadius: 5,
        pointStyle: "circle",
      },
    },
    plugins: {
      legend: {
        display: true,
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
          display: true,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <section>
      <div className="temp-trend">
        <p>Min and Max Temp Prediction</p>
      </div>
      <div className="line-chart min-max-linechart">
        <Line options={options} data={lineCahrtData} />
      </div>
    </section>
  );
};

export default MinMaxTemp;
