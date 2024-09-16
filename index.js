import Kartya from "./Kartya.js";
import { kepLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";

const divElem = $(".kiskepek");
const kivElem = $(".kivalasztott")
const leftButton = $(".left")
const rightButton = $(".right")

new Kartyak(kepLista, divElem);
var selectedKep = 0;
new Kartya(kepLista[selectedKep], kivElem, selectedKep, true);

$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivElem.empty();
    selectedKep = event.detail;
    new Kartya(kepLista[selectedKep], kivElem, selectedKep, true)
})

$(leftButton).on("click",(event)=>{
    if (selectedKep <=0) {return};
    kivElem.empty();
    selectedKep = selectedKep-1;
    new Kartya(kepLista[selectedKep], kivElem, selectedKep, true)
})

$(rightButton).on("click",(event)=>{
    if (selectedKep === kepLista.length-1) {return};
    console.log("jobbra click", selectedKep)
    kivElem.empty();
    selectedKep = selectedKep+1;
    new Kartya(kepLista[selectedKep], kivElem, selectedKep, true)
})