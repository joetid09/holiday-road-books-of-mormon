import { eaterySelectList } from "./eateries/selectEateries.js"
import { eateryItinerary } from "./eateries/eatery.js"
import { getParks } from "./parks/ParkProvider.js"
import { ParkList } from "./parks/ParksList.js"
import { ParkSelect } from "./parks/ParksSelect.js"

eaterySelectList()
getParks()
ParkSelect()
ParkList()
