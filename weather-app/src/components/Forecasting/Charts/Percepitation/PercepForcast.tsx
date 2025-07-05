import "./PercepForcast.css";
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
const PercepForcast = (props: any) => {
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
        data: props.data.hour.map((cast: any) => cast.precip_mm),
        fill: true,
        borderColor: "rgb(163, 213, 244)",
        backgroundColor: "rgba(125, 209, 255, 0.81)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          display: true,
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
    <section className="percept-chart-container">
      <div className="pericept">
        <p>Precipitation </p>
        <p>
          {props.data.day.totalprecip_mm} <small>mm</small>
        </p>
      </div>

      <div className=" percept-chart">
        {props.data.day.totalprecip_mm === 0 ? (
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
