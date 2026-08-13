// Predict the output after fixing `deposit` so that it actually updates the account balance:

const account = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
};

console.log(account.deposit(50)); // {{c1::150}}
console.log(account.deposit(25)); // {{c2::175}}
console.log(account.balance); // {{c3::175}}
