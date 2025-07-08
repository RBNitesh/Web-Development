const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

const getData = async () => {
  console.log(`getting data....`);
  let response = await fetch(URL);
  // console.log(response);
  let data = await response.json();
  console.log(data);
};
getData();

// fetch(URL)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.log(error));
