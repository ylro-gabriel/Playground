const user = {
  name: "Alex",
  contact: {
    email: "a@example.com",
    phone: 1234,
  },
};

console.log(user.contact.email);

const contactNo = user.contact.phone;
console.log(contactNo);
const emailAd = user.contact.email;
console.log(emailAd);

user.contact.email = "example@example.com";
console.log(user);
