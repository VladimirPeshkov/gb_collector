export const selectTab = elem => {
    elem.addEventListener('click', (event)=> {
        if (event.target.classList.contains('tabs-list__tab')) {

            for( let tab of document.querySelectorAll('.calculators-list__item')) {
                tab.classList.remove('active__tab');

                if (event.target.dataset.calc === tab.dataset.calc) {
                    tab.classList.add('active__tab')
                }
            }
        }
    });
};