import { showError } from './error.js';
import { DateTime } from 'luxon';

export function dateCalc() {

    let dateCalcForm = document.querySelector('#diffDate__form'),
        dateCalcResult = document.querySelector('.diffDate__result');

    dateCalcForm.addEventListener('submit', handleCalcDate);

    
    function handleCalcDate(event) {
        event.preventDefault();
        dateCalcResult.innerHTML = '';
        let [firstDate, secondDate] = this.elements

        if (!firstDate.value || !secondDate.value) dateCalcResult.innerHTML = showError('Оба поля должны быть заполнены');
        else {
            let result;
            firstDate = DateTime.fromISO(firstDate.value);
            secondDate = DateTime.fromISO(secondDate.value);

            if (firstDate > secondDate) {
                [firstDate, secondDate] = [secondDate, firstDate];
            }

            result = secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
            dateCalcResult.innerHTML = `Лет: ${result.years}, Месяцев: ${result.months}, Дней: ${result.days}`
        }
    }
}
