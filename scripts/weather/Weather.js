export const WeatherHTML = (weatherObj) => {
    return `
        <div class="component__weather-box">
            <div class="component__weather-content">
                <div class="weather-content__overview"></div>
                <div class="weather-content__temp"></div>
            </div>
            <div class="component__forecast-box"></div>
        </div>
    `
}