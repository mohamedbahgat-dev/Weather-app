import "./TempForecast.css";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { useForcastData, useCurrentWeather } from "../../../../Store";
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
import { useEffect } from "react";

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

const TempForecast = (props: any) => {
  const { forcastedData } = useForcastData();
  const { currentWeather } = useCurrentWeather();

  useEffect(() => {
    console.log(forcastedData);
  }, []);

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
          .map((cast: any) => cast.temp_c)
          .filter((_: any, index: number) => index % 2 === 0),
        fill: true,
        borderColor: "rgb(255, 156, 99)",
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
          gradient.addColorStop(0, "rgba(238, 136, 105, 0)"); // Bottom color
          gradient.addColorStop(1, "rgba(247, 139, 89, 0.8)"); // Top color

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
        pointRadius: 3,
        pointStyle: "circle",
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
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="temp-line-chart">
      <div className="temp-trend">
        <p>Temprature trend</p>
        <p>
          {forcastedData[0].day.avgtemp_c}
          <sup>o</sup>C
        </p>
        <div className="trend">
          {currentWeather.temp_c > props.data.day.avgtemp_c ? (
            <IoIosTrendingUp size={20} color={"#2ECC40"} />
          ) : (
            <IoIosTrendingDown size={20} color={"red"} />
          )}
        </div>
      </div>
      <div className="line-chart">
        <Line options={options} data={lineCahrtData} />
      </div>
    </section>
  );
};

export default TempForecast;
