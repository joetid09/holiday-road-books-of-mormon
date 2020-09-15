// Prepare individual park to be displayed in HTML
export let URL = "https://api.openweathermap.org/data/2.5/onecall?lat=36&lon=-86&exclude=current,hourly,minutely&appid=4f3b62dffc1a390df4e9b0693dc0f8e3&units=imperial";

export const ParkHTML = (parkObj) => {
    URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${parkObj.latitude}&lon=${parkObj.longitude}&exclude=current,hourly,minutely&appid=4f3b62dffc1a390df4e9b0693dc0f8e3&units=imperial`;

    return `
    <section class="parkHeader">
        <h1>${parkObj.fullName}</h1>
        <div class="dropdown">
            <span>Explore</span>
            <div class="dropdown-content">
                <p>${parkObj.description}</p>
                <p><img src="${parkObj.images[0].url}" alt="${parkObj.images[0].altText}" width="200" height="180"</p>
                <p><a href="${parkObj.url}">Visit this Park's Website</a></p>
            </div>
        </div>
    </section>
    `

}

