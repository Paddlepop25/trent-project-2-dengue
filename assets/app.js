let MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";

function initMap() {
  let singapore = { lat: 1.35027, lng: 103.851959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });
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
    // initMap();
    console.log(4);
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
  let northEast = { lat: 1.4326, lng: 103.8267 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: northEast
  });
  // let result = Object.entries(googleData)[2][1][0]["geometry"]["location"];
  let googleObject = Object.entries(googleData)[2][1];
  for (let i = 0; i < googleObject.length; i++) {
    // console.log(results[i]["geometry"]["location"]) // get 20 locations;
    let location = googleObject[i]["geometry"]["location"];
    // console.log(i);
    addMarkers(map, location);
  }

  function addMarkers(map, location) {
    for (let i = 0; i < 6; i++) {
      let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
      let markerIcon = MARKER_PATH + markerLetter + ".png";
      let marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: markerIcon
        // icon: "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png"
      });
    }
  }
}

// for (var i = 0; i < results.length; i++) {
//   var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
//   var markerIcon = MARKER_PATH + markerLetter + '.png';
//   // Use marker animation to drop the icons incrementally on the map.
//   markers[i] = new google.maps.Marker({
//     position: results[i].geometry.location,
//     animation: google.maps.Animation.DROP,
//     icon: markerIcon
//   });
//   // If the user clicks a hotel marker, show the details of that hotel
//   // in an info window.
//   markers[i].placeResult = results[i];
//   google.maps.event.addListener(markers[i], 'click', showInfoWindow);
//   setTimeout(dropMarker(i), i * 100);
//   addResult(results[i], i);
// }
