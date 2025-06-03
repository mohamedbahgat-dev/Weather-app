const APIKEY = "2f7929ea5ebb4412994204114250106";

export const FetchCurrentWeather = (query: any) => {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}&aqi=yes`
  );
};
