const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

const borrower1 = {
  name: "Ylro Gabriel",
  email: "ylrgbrlmllr@gmail.com",
};

function checkoutDevice(ledger, assetTag, borrower) {
  let ledgerClone = structuredClone(ledger);

  if (Object.hasOwn(ledgerClone, assetTag) === false) {
    return {
      ledger: ledgerClone,
      message: `${assetTag} not found.`,
    };
  }

  if (ledgerClone[assetTag]["status"] === "CheckedOut") {
    return {
      ledger: ledgerClone,
      message: `${assetTag} already CheckedOut.`,
    };
  }

  ledgerClone[assetTag]["borrower"]["name"] = borrower["name"];
  ledgerClone[assetTag]["borrower"]["email"] = borrower["email"];
  ledgerClone[assetTag]["status"] = "CheckedOut";

  return {
    ledger: ledgerClone,
    message: `Asset tag of user ${borrower["name"]} is ${assetTag} `,
  };
}

function checkinDevice(ledger, assetTag) {
  let ledgerClone = structuredClone(ledger);

  if (Object.hasOwn(ledgerClone, assetTag) === false) {
    return {
      ledger: ledgerClone,
      message: `${assetTag} not found.`,
    };
  }

  ledgerClone[assetTag]["borrower"]["name"] = "";
  ledgerClone[assetTag]["borrower"]["email"] = "";

  ledgerClone[assetTag]["dueDate"] = "";

  ledgerClone[assetTag]["status"] = "CheckedIn";

  return {
    ledger: ledgerClone,
    message: `Device with asset tag ${assetTag} checked in!`,
  };
}

const today = "9/23/26";

function listOverdueDevices(ledger, today) {
  let overdueDevices = [];

  return overdueDevices;
}

//TODO delete this later
//Practice problem level 1
function filterAndSort(numbers, threshold) {
  //return only numbers > threshold, sorted ascending
  const filterThreshold = numbers.filter(greaterThanThreshold);

  function greaterThanThreshold(num) {
    if (num > threshold) {
      return num;
    }
  }

  return filterThreshold.sort(function (a, b) {
    return a - b;
  });
}

//Practice Problem level 2
function incompleteTasksByPriority(tasks) {
  //tasks: [{title: "...", done: false, priority:2},...]
  //return the tasks where done === false, sorted by priority ascending

  const filteredTasks = tasks.filter(filterOutFalse);
  function filterOutFalse(obj) {
    return obj.done === false;
  }

  return filteredTasks.sort(function (a, b) {
    return a.priority - b.priority;
  });
}

const tasks = [
  {
    title: "Write report",
    done: false,
    priority: 3,
  },
  {
    title: "Email client",
    done: true,
    priority: 1,
  },
  {
    title: "Fix bug",
    done: false,
    priority: 1,
  },
  {
    title: "Buy coffee",
    done: false,
    priority: 2,
  },
  {
    title: "Deploy app",
    done: true,
    priority: 2,
  },
  {
    title: "Plant sprint",
    done: false,
    priority: 10,
  },
];

/*
Expected Output
[
  { title: "Fix bug",     done: false, priority: 1 },
  { title: "Buy coffee",  done: false, priority: 2 },
  { title: "Write report",done: false, priority: 3 },
  { title: "Plan sprint", done: false, priority: 10 }
]
*/

//Problem level 3
function upcomingEventsSorted(events) {
  //return events where cancelled === false
  //sort date in ascending order

  const filteredEvents = events.filter(filterFalse);
  function filterFalse(event) {
    return event.cancelled === false;
  }

  return filteredEvents.sort((a, b) => a.date.localeCompare(b.date));
}

const events = [
  {
    name: "Team lunch",
    date: "2025-09-05",
    cancelled: false,
  },
  {
    name: "Conference",
    date: "2025-10-01",
    cancelled: false,
  },
  {
    name: "Workshop",
    date: "2025-09-20",
    cancelled: true,
  },
  {
    name: "Old meetup",
    date: "2024-12-31",
    cancelled: false,
  },
  {
    name: "Cancelled BBQ",
    date: "2025-01-02",
    cancelled: true,
  },
  {
    name: "Retro",
    date: "2025-01-15",
    cancelled: false,
  },
];

console.log(upcomingEventsSorted(events));
/*
Expected output:
[
  { name: "Old meetup", date: "2024-12-31", cancelled: false },
  { name: "Retro",      date: "2025-01-15", cancelled: false },
  { name: "Team lunch", date: "2025-09-05", cancelled: false },
  { name: "Conference", date: "2025-10-01", cancelled: false }
]
*/

let arr = ["d", "c", "b", "a"];
let sortArr = arr.sort((a, b) => a.localeCompare(b));
console.log(sortArr);
