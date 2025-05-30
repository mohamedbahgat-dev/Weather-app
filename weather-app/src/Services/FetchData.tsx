const APIKEY = "92037c02546f4a869ff51443252905";

export const FetchCurrentWeather = (query: any) => {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}&aqi=yes`
  );
};
