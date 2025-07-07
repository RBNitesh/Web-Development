// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Error fetching data");
//       }
//     }, 3000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.error(data);
//   });

//another way of writting promise
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@example.com" });
//   }, 5000);
// }).then(function (response) {
//   console.log(response);
// });

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "nitesh", email: "nitesh123@gmail.com" });
    } else {
      reject(`Something went wrong`);
    }
  }, 3000);
});

// promise
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => console.log(username))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log(`The promise is either resolve or rejected`);
//   });

//using async await
// async function consumePromise() {
//   try {
//     const response = await promise;
//     console.log(response);
//   } catch (error) {
//     console.log(`Error : ${error}`);
//   }
// }
// consumePromise();

function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`Data = ${data}`);
      // reject(`Something went wrong!`);
    }, 3000);
  });
}

//promise chain
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log(`request either resolved or rejected`);
  });
