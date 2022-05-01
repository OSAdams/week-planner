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

/*
  <tr>
    <td> 01:00 </td>
    <td> 'Description' </td>
  </tr>

  -Define a function that'll take the parsed object as the argument.
  -In the function we're going to push the objects into an array that matches the
  window hash or text content of the button clicked
  -Once these objects are in the array, we're doing to sort the array by time value
  -Create an element like the example posted above
  -Update the text content
  -push() the element into the table
*/

function populateEntryList(object) {
  const tableRow = document.createElement('tr');
  const tableData = document.createElement('td');
  return tableRow + tableData;
}

populateEntryList();
