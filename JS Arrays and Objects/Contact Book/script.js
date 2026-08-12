const contacts = {
  alice: {
    phone: "555-1234",
    email: "alice@example.com",
    "favorite color": "blue",
  },
};

function addContact(contacts, name, info) {
  contacts[name] = info;
  return contacts;
}
addContact(contacts, "bob", {
  phone: "555-5678",
  email: "bob@example.com",
  "favorite color": "green",
});

function getContactInfo(contacts, name, field) {
  return contacts[name][field];
}
console.log(getContactInfo(contacts, "bob", "favorite color"));

function printContact(contacts, name) {
  contacts = contacts[name];
  console.log(`Phone: ${contacts.phone}`);
  console.log(`Email: ${contacts.email}`);
  console.log(`Favorite color: ${contacts["favorite color"]}`);
}
printContact(contacts, "alice");

function updateField(contacts, name, field, value) {
  contacts[name][field] = value;
  return console.log(contacts);
}
updateField(contacts, "alice", "favorite color", "red");
