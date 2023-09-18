import { GEOCODING_TOKEN } from "../config.js";
import request from "request";

export const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${GEOCODING_TOKEN}&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!");
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[0],
        lng: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};
