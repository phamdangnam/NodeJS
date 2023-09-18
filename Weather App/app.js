import { geoCode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";
import request from "request";
import { API_KEY } from "./config.js";
// Fetching weather data about an address

geoCode("Philadelphia", (error, data) => {
  if (error) return error;
  forecast(data.lat, data.lng, (forecastError, forecastData) => {
    if (forecastError) return forecastError;

    console.log(data.location);
    console.log(forecastData);
  });
});
