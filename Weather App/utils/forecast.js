import { API_KEY } from "../config.js";
import request from "request";

export const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(
    lng
  )}, ${encodeURIComponent(lat)}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!");
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", url);
    } else {
      const data = response.body.current;
      callback(
        undefined,
        `It is ${data.weather_descriptions}. It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain`
      );
    }
  });
};
