const APIKEY = "2f7929ea5ebb4412994204114250106";

interface QueryType {
  query: string | null;
}

export const FetchCurrentWeather = (query: QueryType) => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}&aqi=yes`
  );
};

const getDate = () => {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = String(dateNow.getMonth() + 1).padStart(2, "0");
  const day = String(dateNow.getDay()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const FetchAstroData = (query: QueryType) => {
  return fetch(
    `https://api.weatherapi.com/v1/astronomy.json?key=${APIKEY}&q=${query}&dt=${getDate()}`
  );
};

export const FetchForecasted = (query: QueryType) => {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${query}&days=14&aqi=no&alerts=no`
  );
};
