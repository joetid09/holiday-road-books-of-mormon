//Step 6 - Import exportable functions made thus far
import { bizarreMade } from "./Bizarre.js";
import { useBizarre, getBizarre } from "./BizarreProvider.js";
import { BizarreSelect } from "./BizarreSelect.js";


//Step 7 - Store HTML in the getHub HTML class
const eventHub = document.querySelector("#getHub")

//Listen to the custom event you dispatched in BizarreSelect.js
eventHub.addEventListener("bizarreChosen", event => {
    if(event.detail.bizarreChosen !== "0") {
        const matchBizarre = useBizarre().filter(tacoBizarre => {
            return tacoBizarre.name === event.detail.bizarreThatWasChosen
        })
        render(matchBizarre)
    } else {
        render(useBizarre());
    }
})

//Create exportable function that takes getBizarre() then calls useBizarre() then renders and passes in useBizarre 
export const bizarreList = () => {
    getBizarre()
    .then(() => {
        const bizarreArray = useBizarre();
        console.log("bizarreArray", bizarreArray);
        render(bizarreArray)
    })
}


//
const render = (bizarreArray = []) => {
    const contentTarget = document.querySelector(".bizlist")
    contentTarget.innerHTML = bizarreArray.map((singleBizarre) => {
        return bizarreMade(singleBizarre)
    }).join("")
}

