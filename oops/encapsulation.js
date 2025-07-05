class BankAccounts {
  #balance = 0; //this is not accessible outside the class

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let myAccount = new BankAccounts();
// myAccount.deposit(3000);
console.log(myAccount.getBalance());
