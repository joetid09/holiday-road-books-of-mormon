// import { bizarreList } from "./bizarreries/BizarreList.js";
import { saveBizarre } from "./bizarreries/BizarreProvider.js";
import { BizarreSelect } from "./bizarreries/BizarreSelect.js";
import { bizarreList } from "./bizarreries/BizarreList.js";
import { eaterySelectList } from "./eateries/selectEateries.js";
import { eateryItinerary } from "./eateries/eatery.js";
import { getParks } from "./parks/ParkProvider.js";
import { ParkList } from "./parks/ParksList.js";
import { ParkSelect } from "./parks/ParksSelect.js";
// import { WeatherDisplay } from "./weather/WeatherList.js";
import { SelectedParkWeather } from "./weather/WeatherSelect.js";

getParks()
ParkSelect()
ParkList()
// bizarreList(); 
BizarreSelect();
// bizarreList();
// WeatherDisplay();
SelectedParkWeather();
eaterySelectList()