import "./HumidForcast.css";

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

const HumidForcast = (props: any) => {
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
        data: props.data.hour
          .map((cast: any) => cast.humidity)
          .filter((_: any, index: number) => index % 2 === 0),
        fill: true,
        borderColor: "rgb(245, 217, 172)",
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial render
            return;
          }

          // Create a linear gradient based on chart area dimensions
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(140, 213, 242, 0)"); // Bottom color
          gradient.addColorStop(1, "rgba(193, 196, 198, 0.8)"); // Top color

          return gradient;
        },
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
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          stepSize: 20,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="humidity-chart-container">
      <div className="humid-trend">
        <p>Humidity</p>
        <p>{props.data.day.avghumidity}%</p>
      </div>
      <div className="humid-line-chart">
        <Line options={options} data={lineCahrtData} />
      </div>
    </section>
  );
};

export default HumidForcast;
