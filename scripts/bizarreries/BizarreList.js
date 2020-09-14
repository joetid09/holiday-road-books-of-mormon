//Step 6 - Import exportable functions made thus far
import { bizarreMade } from "./Bizarre.js";
import { useBizarre, getBizarre } from "./BizarreProvider.js";
import { BizarreSelect } from "./BizarreSelect.js";


//Step 7 - Store HTML in the getHub HTML class
const eventHub = document.querySelector("#getHub")

//Step ? - Create

//Step 9 - Setup a event listener
eventHub.addEventListener("bizarreStateChanged", event => {
    render(useBizarre())
})

//Step 10 - Create exportable function that takes getBizarre() then calls useBizarre() then renders and passes in useBizarre 
export const bizarreList = () => {
    getBizarre()
    .then(useBizarre)
    .then(render)
}

//Step 11 - Create a render function 
//Step 12 - Store HTML in the eatBazzarContainer HTML class
//Step 13 - Map over the bizarre array
//Step 14 - Remove commas
const render = (bizarreAry) => {
    const domTarget = document.querySelector(".bizzarr")
    let htmlArray = bizarreAry.map(tacoBizarre => {
        return bizarreMade(tacoBizarre);
    })
    domTarget.innerHTML += htmlArray.join("");
}

