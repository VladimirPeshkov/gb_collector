import { showError } from './error.js';
import { initInterval } from './initInterval.js';

export const timer = () => {

    const timerForm = document.querySelector('.timer__form');
    let timerIndex;

    timerForm.addEventListener('click', initTimer)

    function initTimer(event){
        event.preventDefault();

        const [minutesElem, secondsElem, btnStart, btnStop] = this.elements;

        if (event.target.classList.contains('timer__button-start')) {

            if (!minutesElem.value && !secondsElem.value) document.querySelector('.timer__result').innerHTML = showError("Должно быть заполнено минимум одно поле");
            else {
                let minutes = Number(minutesElem.value);
                let seconds = Number(secondsElem.value);

                btnStart.disabled = true;
                btnStop.disabled = false;
                document.querySelector('.timer__result').innerHTML = `<span class="timer__result-minutes">${minutes}</span>:<span class="timer__result-seconds">${seconds}</span>`;
                
                timerIndex = initInterval(minutes, seconds);        
            }

            minutesElem.value = '';
            secondsElem.value = '';
        }

        else if (event.target.classList.contains('timer__button-stop')) {
            clearInterval(timerIndex);

            btnStart.disabled = false;
            btnStop.disabled = true;
        }

    }
}