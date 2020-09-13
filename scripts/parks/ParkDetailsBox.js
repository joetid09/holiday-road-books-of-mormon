export const ParkDetailsBoxHTML = (parkObj) => {
    return `
    <div class="dialog">  
<dialog id="myFirstDialog" style="width:50%;background-color:#F4FFEF;border:1px dotted black;">  
<p>${parkObj.description}</p>
<p>${parkObj.url}  
<button id="hide">Close</button>  
</dialog>  
<button id="show">Details</button>  
</div>  
    `
}