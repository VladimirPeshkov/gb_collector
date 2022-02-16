import { selectTab } from "./selectTab.js";
import { dateCalc } from "./dateCalc.js"
import { timer } from './timer.js'

window.onload = () =>{
    selectTab(document.querySelector('.tabs-list'));
    dateCalc();
    timer();
}