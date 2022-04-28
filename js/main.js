/* global weeklyPlannerData */
/* exported weeklyPlannerData */

const weekDays = document.querySelector('#week-days');
const addEntry = document.querySelector('#add-entry');
const entryForm = document.querySelector('#entry-form');
const entryModal = document.querySelector('.entry-modal');

function weekDayHash(event) {
  window.location.hash = '#' + event.target.textContent;
}

weekDays.addEventListener('click', weekDayHash);

addEntry.addEventListener('click', event => {
  entryModal.setAttribute('class', 'entry-modal fl-ai-jc-cen');
});

function saveEntryData(event) {
  event.preventDefault();
  if (weeklyPlannerData.editing === null) {
    const plannerEntry = {
      day: entryForm[0].value,
      time: entryForm[1].value,
      description: entryForm[2].value,
      entryId: weeklyPlannerData.nextEntryId++
    };
    weeklyPlannerData.entries.push(plannerEntry);
    entryForm.reset();
  }
  entryModal.setAttribute('class', 'entry-modal fl-ai-jc-cen hidden');
}

entryForm.addEventListener('submit', saveEntryData);

const testTwo = 'hello world';
// eslint-disable-next-line
console.log(testTwo);
