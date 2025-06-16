import "./HumidForcast.css";

import { useForcastData } from "../../../Store";
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

const HumidForcast = () => {
  const { forcastedData } = useForcastData();

  const lineCahrtData: any = {
    labels: [
      "2AM",
      "4AM",
      "6AM",
      "8AM",
      "10AM",
      "12PM",
      "2PM",
      "4PM",
      "6PM",
      "8PM",
      "10PM",
      "12AM",
    ],
    datasets: [
      {
        label: false,
        data: forcastedData[0].hour
          .map((cast: any) => cast.humidity)
          .filter((_: any, index: number) => index % 2 === 0),
        fill: true,
        borderColor: "rgb(255, 195, 99)",
        backgroundColor: "rgba(223, 194, 136, 0.2)",
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
      <div className="humid-trend">
        <p>Humidity trend</p>
        <p>{forcastedData[0].day.avghumidity}%</p>
      </div>
      <div className="humid-line-chart">
        <Line options={options} data={lineCahrtData} />
      </div>
    </section>
  );
};

export default HumidForcast;
