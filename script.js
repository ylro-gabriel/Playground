const newobject = {
  name: "Ylro",
  age: 25,
  sex: "Male",
  country: "Philippines",
  "zip code": 2000,
  phone: {
    smart: "09615800753",
    gomo: "09123456745",
  },
};

console.log(newobject.hasOwnProperty("name"));
console.log(Object.hasOwn(newobject, "age"));
console.log("sex" in newobject);
console.log(newobject.country !== undefined);
console.log(newobject.phone.smart);
