// Prepare individual park to be displayed in HTML

export const ParkHTML = (parkObj) => {
    return `
    <section class="parkHeader">
        <h2>${parkObj.fullName}</h2>
    </section>
    `
}