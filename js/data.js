/* exported weeklyPlannerData */
const savedWeeklyPlannerDataJSON = localStorage.getItem('weekly-planner-local-storage');

let weeklyPlannerData = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

if (savedWeeklyPlannerDataJSON !== null) {
  weeklyPlannerData = JSON.parse(savedWeeklyPlannerDataJSON);
}

window.addEventListener('beforeunload', event => {
  const weeklyPlannerDataJSON = JSON.stringify(weeklyPlannerData);
  localStorage.setItem('weekly-planner-local-storage', weeklyPlannerDataJSON);
});
