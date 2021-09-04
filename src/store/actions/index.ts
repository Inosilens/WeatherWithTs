import * as WeatherActionCreator from "./weatherAction";
import * as PanaginationActionCreator from "./panaginationAction";

export default {
  ...WeatherActionCreator,
  ...PanaginationActionCreator,
};
