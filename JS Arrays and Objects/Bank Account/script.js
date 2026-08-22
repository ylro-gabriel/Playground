const person = {
  name: "Alice",
  age: 25,
  job: "Developer",
  city: "Manila",
};

const { job, city, ...remainingProperties } = person;
console.log(job);
console.log(remainingProperties);
