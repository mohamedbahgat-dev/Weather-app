import "./ForecastCard.css";
const ForecastCard = (props: any) => {
  return (
    <section className="forecast-item">
      <div className="condition">
        <img src={props.data.day.condition.icon} alt="condition icon" />
        <div>
          <p>{props.data.date}</p>
          <p>{props.data.day.condition.text}</p>
        </div>
      </div>
      <div className="weather">
        <div className="uv">
          <p>UV</p>
          <h3>{props.data.day.uv}</h3>
        </div>

        <div>
          <p>wind: {props.data.day.maxwind_kph} kph</p>

          <p>Humidity: {props.data.day.avghumidity}%</p>
        </div>
      </div>
    </section>
  );
};

export default ForecastCard;
