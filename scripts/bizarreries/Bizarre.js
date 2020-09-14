//Step 5 - Design how the Bizzarre will display on the site with HTML with exportable function

export const bizarreMade = (bizObj) => {
    return `
    <section id="bizarre-${bizObj.id}" class="card-bizarre">
        <h2>${bizObj.name}</h2>
        <p>${bizObj.description}</p>
        <p>${bizObj.city}, ${bizObj.state}</p>
    </section>
    `
}