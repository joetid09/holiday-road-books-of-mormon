// Prepare individual park to be displayed in HTML

export const ParkHTML = (parkObj) => {

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

