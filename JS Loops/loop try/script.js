const person = {
  name: "John",
  address: {
    city: "Anytown",
    state: "CA",
  },
};

for (const prop in person) {
  console.log(person[prop].state);
}
