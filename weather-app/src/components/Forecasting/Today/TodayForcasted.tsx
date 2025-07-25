import "./TodayForcasted.css";
import { useForcastData } from "../../../store";

const TodayForcasted = () => {
  const { forcastedData } = useForcastData();

  return (
    <section>
      <table>
        <thead>
          <tr className="header">
            <th>Hour/24hr</th>
            <th>Temp</th>
            <th>Feelslike</th>
            <th>Condition</th>
            <th>Wind/kph</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {forcastedData[0].hour.map((data: any, index: number) => (
            <tr key={data.time_epoch}>
              <td>{index + 1}</td>
              <td>
                {data.temp_c} <sup>°C</sup>
              </td>
              <td>
                {data.feelslike_c} <sup>°C</sup>
              </td>
              <td>{data.condition.text}</td>
              <td>{data.wind_kph} </td>
              <td>{data.humidity} %</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TodayForcasted;
