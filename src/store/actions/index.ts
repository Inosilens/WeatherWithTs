import * as WeatherActionCreator from "./weather";
import * as PanaginationActionCreator from "./panaginationAction";

export default {
  ...WeatherActionCreator,
  ...PanaginationActionCreator,
};
