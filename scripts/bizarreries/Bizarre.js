//Design how the Bizzarre will display on the site with HTML with exportable function

export const bizarreMade = (bizObj) => {
    return `<section class="eateryHead">
    <h2>${bizObj.name}</h2>
<div class="dropdown">
    <span>Detail</span>
        <div class="dropdown-content">
            <p>${bizObj.city}, ${bizObj.state}<p>
             <p>${bizObj.description}</p>
         </div>
</div>
</section>`

}