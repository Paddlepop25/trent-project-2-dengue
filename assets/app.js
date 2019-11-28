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

function northeastMap() {
  let northEast = { lat: 1.4326, lng: 103.8267 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: northEast
  });
}

let northEastClinics = document
  .querySelector(".northeast-clinics")
  .addEventListener("click", () => {
    getNorthClinics();
  });

function getNorthClinics() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.4326,103.8267&radius=5000&type=hospital&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
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
    let listOfObjects = googleObject[i];
    // let location = googleObject[i]["geometry"]["location"];
    addMarkers(map, listOfObjects);
    // console.log(googleObject[i]["name"]);
  }
}

function addMarkers(map, place) {
  let marker = new google.maps.Marker({
    position: place["geometry"]["location"],
    map: map,
    animation: google.maps.Animation.DROP
  });

  google.maps.event.addListener(marker, "click", function() {
    // console.log(place["vicinity"])
    // clearResults(marker);
    let display = {};
    display.name = place.name;
    display.vicinity = place.vicinity;

    if (place["name"] === undefined) {
      place["name"] = "No Available Name";
    } else {
      place["name"] = place["name"];
    }

    if (place["vicinity"] === undefined) {
      place["vicinity"] = "No Available Address";
    } else {
      place["vicinity"] = place["vicinity"];
    }

    let box = new google.maps.InfoWindow({
      content: `<h5>${display.name}</h5>
             <p>Address: ${display.vicinity}</p>`
    });

    box.open(map, marker);
  });

  return marker;

  // function clearResults(markers) {
  //   for (let m in markers) {
  //     markers[m].setMap(null);
  //   }
  //   markers = [];
  // }
}

// function addMarkers(map, location) {
//   let marker = new google.maps.Marker({
//     position: location,
//     map: map,
//     animation: google.maps.Animation.DROP
//     // icon: markerIcon
//     // icon: "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png"
//   });

//   // for (let i = 0; i < 6; i++) {
//   //   let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
//   //   let markerIcon = MARKER_PATH + markerLetter + ".png";
//   //   let marker = new google.maps.Marker({
//   //     position: location,
//   //     map: map,
//   //     animation: google.maps.Animation.DROP,
//   //     icon: markerIcon
//   //     // icon: "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png"
//   //   });
//   // }

//   // let box = new google.maps.InfoWindow({
//   //   content: "<h6>Clinic</h6>"
//   // });

//   // box.open(map, marker);
// }

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
    initMap();
  });
