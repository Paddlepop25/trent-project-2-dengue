let northEastClinics = document
  .querySelector(".northeast-clinics")
  .addEventListener("click", () => {
    getNorthClinics();
  });

function getNorthClinics() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3397222222,103.9544444444&radius=4000&type=hospital&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
    true
  );

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      loadClinicMarkers(response);
      loadClinicTable(response);
    } else {
      console.log("There is something wrong");
    }
  };

  xhr.send();
  // loadClinicTable();
}

function loadClinicMarkers(googleData) {
  let tampines = { lat: 1.3397222222, lng: 103.9544444444 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: tampines
  });
  let googleObject = Object.entries(googleData)[2][1];
  for (let i = 0; i < googleObject.length; i++) {
    let listOfObjects = googleObject[i];
    addMarkers(map, listOfObjects);
  }
}

function loadClinicTable(googleData) {
  let resultsTable = document.querySelector(".results-table");
  let googleObject = Object.entries(googleData);
  let googleResult = googleObject[2][1];
  let tableHead = `<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Rating</th>
    <th scope="col">Address</th>
  </tr>
</thead>`;
  let tableRow;
  let status = googleObject[3][1];
  if (status === "OK") {
    for (let i = 0; i < googleResult.length; i++) {
      let tableList = googleResult[i];
      let tableRating = tableList["rating"];
      if (tableRating === undefined) {
        tableRating = "N/A";
      }
      tableRow += `<tr>
          <th scope="row">${i}</th>
          <td>${tableList["name"]}</td>
          <td>${tableRating}</td>
          <td>${tableList["vicinity"]}</td>
        </tr>
      `;
      resultsTable.innerHTML = `<table class="table">
      ${tableHead}<tbody>${tableRow}</tbody>
      </table>`;
    }
  } else {
    resultsTable.innerHTML = `There is no data available`;
    alert("There was an error with data retrieval because: " + status);
  }
}
