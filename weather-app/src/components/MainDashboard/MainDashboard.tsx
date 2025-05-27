import "./MainDashboard.css";

const MainDashboard = () => {
  return (
    <section className="dashboard">
      <div className="header">
        <p>Current Weather</p>
        <h3>Time Now</h3>
      </div>
      <div className="temp-card">
        <img src="#" alt="weather icon" />
        <h2>Temp</h2>
        <p>Weather note</p>
      </div>
      <article>Note about weather condition</article>
    </section>
  );
};

export default MainDashboard;
