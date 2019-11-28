// let MARKER_PATH =
//   "https://developers.google.com/maps/documentation/javascript/images/marker_green";

function initMap() {
  let singapore = { lat: 1.35027, lng: 103.851959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });

  // infoWindow = new google.maps.InfoWindow({
  //   content: document.getElementById("info-content")
  // });
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

function northeastMap() {
  let northEast = { lat: 1.4326, lng: 103.8267 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: northEast
  });
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
  let googleObject = Object.entries(googleData)[2][1];
  for (let i = 0; i < googleObject.length; i++) {
    let location = googleObject[i]["geometry"]["location"];
    // console.log(location);
    addMarkers(map, location);
    console.log(googleObject[i]["name"]);
  }
}

function addMarkers(map, location) {
  let marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP
    // icon: markerIcon
    // icon: "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png"
  });

  // for (let i = 0; i < 6; i++) {
  //   let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
  //   let markerIcon = MARKER_PATH + markerLetter + ".png";
  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //     icon: markerIcon
  //     // icon: "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png"
  //   });
  // }

  // let box = new google.maps.InfoWindow({
  //   content: "<h1>Clinic</h1>"
  // });

  // box.open(map, marker);
}

// function infoWindow(googleData) {
//   console.log()
// }

// function dropMarker(i) {
//   return function() {
//     markers[i].setMap(map);
//   };
// }

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
