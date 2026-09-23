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

  if (ledger["status"] === "CheckedIn") return overdueDevices;
}

const ages = [16, 17, 14, 18, 18, 19, 25];

function isAdult(number) {
  return number >= 18;
}

const adults = ages.filter(isAdult);
console.log(adults);
