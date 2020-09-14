// import { WeatherDisplay } from "./weather/WeatherList.js";
import { SelectedParkWeather } from "./weather/WeatherSelect.js"
import { getParks } from "./parks/ParkProvider.js"
import { ParkList } from "./parks/ParksList.js"
import { ParkSelect } from "./parks/ParksSelect.js"

getParks()
ParkSelect()
ParkList()
// WeatherDisplay();
SelectedParkWeather();