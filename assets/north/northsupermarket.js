let northEastSupermarkets = document
  .querySelector(".northeast-supermarkets")
  .addEventListener("click", () => {
    northEastSupermarkets();
  });

function getNorthSupermarkets() {
  console.log("hi");

  // const xhr = new XMLHttpRequest();

  // xhr.open(
  //   "GET",
  //   "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3397222222,103.95444444448&radius=4000&type=supermarket&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
  //   true
  // );

  // xhr.onload = function() {
  //   if (this.status === 200) {
  //     const response = JSON.parse(this.responseText);

  //     loadNorthSupermarketMarkers(response);
  //   } else {
  //     console.log("There is something wrong");
  //   }
  // };

  // xhr.send();
}

// function loadNorthSupermarketMarkers(googleData) {
//   let northEast = { lat: 1.3397222222, lng: 103.9544444444 };
//   let map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: northEast
//   });
//   let googleObject = Object.entries(googleData)[2][1];
// for (let i = 0; i < googleObject.length; i++) {
//   let listOfObjects = googleObject[i];
//   addMarkers(map, listOfObjects);
// }
//   console.log(googleData);
// }
