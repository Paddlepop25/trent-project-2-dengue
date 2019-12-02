function initMap() {
  let singapore = { lat: 1.35027, lng: 103.821959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });

  let data = map.data.loadGeoJson("/trent-project-2-dengue/nea_files/dengue-clusters-geojson.geojson");

  map.data.addGeoJson(data);

  map.data.setStyle({
    fillColor: "green",
    strokeWeight: 1
  });

  // infoWindow = new google.maps.InfoWindow({
  //   content: document.getElementById("info-content")
  // });
}

let northEastArea = document
  .querySelector(".north-east")
  .addEventListener("click", () => {
    getNorthDengue();
  });

let southEastArea = document
  .querySelector(".south-east")
  .addEventListener("click", () => {
    getSouthEastDengue();
  });

let centralArea = document
  .querySelector(".central")
  .addEventListener("click", () => {
    getCentralDengue();
  });

let southWestArea = document
  .querySelector(".south-west")
  .addEventListener("click", () => {
    getSouthWestDengue();
  });

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

let resetButton = document
  .querySelector(".reset-btn")
  .addEventListener("click", () => {
    initMap();
  });
