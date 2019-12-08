let mealDelivery = document
  .querySelector(".meals")
  .addEventListener("click", () => {
    getMeals();
  });

function getMeals() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3497222222,103.9544444444&radius=4000&type=meal_delivery&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
    true
  );
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      loadMealMarkers(response);
      loadMealTable(response);
    } else {
      alert(
        "I'm sorry, there are too many requests. \nPlease try again in a second."
      );
    }
  };
  xhr.send();
}

function loadMealMarkers(googleData) {
  let northEast = { lat: 1.3497222222, lng: 103.9544444444 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: northEast
  });
  let googleObject = Object.entries(googleData)[1][1];
  for (let i = 0; i < googleObject.length; i++) {
    let listOfObjects = googleObject[i];
    addMarkers(map, listOfObjects);
  }
}

function loadMealTable(googleData) {
  let resultsTable = document.querySelector(".results-table");
  let googleObject = Object.entries(googleData);
  let googleResult = googleObject[1][1];
  let tableHead = `<thead>
  <tr class="table-header">
  <th scope="col">#</th>
  <th scope="col">Name</th>
  <th scope="col">Address</th>
  </tr>
  </thead>`;
  let tableRow = "";
  let status = googleObject[2][1];
  if (status === "OK") {
    for (let i = 0; i < googleResult.length; i++) {
      let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
      let tableList = googleResult[i];

      tableRow += `<tr>
              <th scope="row">${markerLetter}</th>
              <td>${tableList["name"]}</td>
              <td>${tableList["vicinity"]}</td>
            </tr>
          `;
      resultsTable.innerHTML = `<table class="table-sm">
          ${tableHead}<tbody>${tableRow}</tbody>
          </table>`;
    }
  } else {
    resultsTable.innerHTML = `There is no data available`;
    alert("There was an error with data retrieval. \nPlease try again.");
  }
}
