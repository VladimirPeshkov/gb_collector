import { addAudio } from "./addAudio.js";

export const initInterval = (minutes, seconds) =>{
    let userTimer = setInterval(()=>{
        if (minutes === 0 && seconds === 0) {
            clearInterval(userTimer);
            addAudio('../sounds/iphone_sms_original.mp3');
            document.querySelector('.timer__button-start').disabled = false;
            document.querySelector('.timer__button-stop').disabled = true;
        }
        else {
            seconds--;
            if (minutes > 0) {
                if (seconds < 0) {
                    minutes--;
                    seconds = 59;
                }
            }
        }
        document.querySelector('.timer__result').innerHTML = `<span>${minutes}</span>:<span>${seconds}</span>`;
    }, 200);

    return userTimer;
}