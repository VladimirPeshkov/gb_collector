import { selectTab } from "./selectTab.js";
import { dateCalc } from "./dateCalc.js";
import { timer } from './timer.js';
import '../CSS/style.css';
import '../sounds/iphone_sms_original.mp3';

window.onload = () =>{
    selectTab(document.querySelector('.tabs-list'));
    dateCalc();
    timer();
}