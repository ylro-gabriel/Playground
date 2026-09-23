const schedule1 = {
  events: [],
};
const schedule2 = {
  events: [{ name: "Study" }, { name: "Workout" }],
};

function runSchedule(schedule) {
  if (schedule.events.length === 0) {
    console.log(`No events found`);
    return;
  }

  for (let i = 0; i < schedule.events.length; i++) {
    console.log(`Running ${schedule.events[i].name}`);
  }
}

runSchedule(schedule2);

runSchedule(schedule1);
