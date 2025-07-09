const User = {
  _email: "@poetry.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(email) {
    this._email = email;
  },
};

const tea = Object.create(User);
console.log(User.email);
