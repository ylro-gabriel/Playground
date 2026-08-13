const formSubmission = {
  username: "jdoe",
  email: "",
  age: 0,
  phone: undefined,
  newsletter: null,
};

function fieldExist(obj, field) {
  return Object.hasOwn(obj, field);
}

function fieldExists(obj, field) {
  return field in obj;
}

function fieldIsDefined(obj, field) {
  return obj[field] !== undefined;
}

function hasValue(obj, field) {
  if (obj[field] === "" || obj[field] === null || obj[field] === undefined) {
    return false;
  } else {
    return true;
  }
}

console.log(fieldExists(formSubmission, "phone")); // ?
console.log(fieldIsDefined(formSubmission, "phone")); // ?
console.log(fieldExists(formSubmission, "address")); // ?
console.log(hasValue(formSubmission, "age")); // ? (should be true, it's 0)
console.log(hasValue(formSubmission, "email")); // ? (should be false, it's "")
