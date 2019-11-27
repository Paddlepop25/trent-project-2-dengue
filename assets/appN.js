function initMap() {
  let singapore = { lat: 1.35027, lng: 103.851959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });
  // var marker = new google.maps.Marker({ position: singapore, map: map });
}

let northEastArea = document
  .querySelector(".north-east")
  .addEventListener("click", () => {
    northeastMap();
  });

let northEastSelections = document
  .querySelector(".northeastclinics")
  .addEventListener("click", () => {
    getNorthClinics();
  });

// let southEastArea = document
//   .querySelector(".south-east")
//   .addEventListener("click", () => {
//     console.log("south-east");
//   });

// let centralArea = document
//   .querySelector(".central")
//   .addEventListener("click", () => {
//     console.log("central");
//   });

// let southWestArea = document
//   .querySelector(".south-west")
//   .addEventListener("click", () => {
//     console.log("south-west");
//   });

let resetButton = document
  .querySelector(".reset-btn")
  .addEventListener("click", () => {
    initMap();
  });

function northeastMap() {
  let northEast = { lat: 1.4326, lng: 103.8267 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: northEast
  });
  // var marker = new google.maps.Marker({ position: northEast, map: map });
}

function getNorthClinics() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.4326,103.8267&radius=5000&type=doctor&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
    true
  );

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      loadClinicMarkers(response);
    }
  };

  xhr.send();
}

function loadClinicMarkers(googleData) {
  const latlongLocation = Object.entries(googleData)[2][1];
  console.log(latlongLocation);
}
