/* global data */
/* exported data */

const weekDays = document.querySelector('#week-days');
const addEntry = document.querySelector('#add-entry');

let dataView = '';

weekDays.addEventListener('click', eventTarget);

function eventTarget(event) {
  if ('#' + event.target.getAttribute('id') === window.location.hash) {
    return;
  }
  if (event.target.getAttribute('class') === 'day fl-ai-jc-cen') {
    location.hash = '#' + event.target.getAttribute('id');
    dataView = event.target.getAttribute('id');
    // eslint-disable-next-line
    console.log(dataView);
  }
}

addEntry.addEventListener('click', event => {
  // eslint-disable-next-line
  console.log('you have clicked me tehe');
});
