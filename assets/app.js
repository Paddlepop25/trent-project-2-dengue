let markers = [];
let infoWindow;
let request;
let service;

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

let resetButton = document
  .querySelector(".reset-btn")
  .addEventListener("click", () => {
    initMap();
  });

function initMap() {
  let singapore = { lat: 1.35027, lng: 103.821959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });

  let data = map.data.loadGeoJson("/assets/nea_files/dengue-clusters-geojson.geojson");

  map.data.addGeoJson(data);

  map.data.setStyle({
    fillColor: "green",
    strokeWeight: 1
  });

  // infoWindow = new google.maps.InfoWindow({
  //   // content: document.getElementById("info-content")
  // });
}

function addMarkers(map, place) {
  // let markers = [];
  // let markerPath = "http://maps.google.com/mapfiles/marker";
  // let numberOfPlaces = Object.keys(place).length;
  let numberOfPlaces = 30;
  // let markerIcon = "http://maps.google.com/mapfiles/markerL.png";
  // let numberOfPlaces2 = a.length;
  // for (let i = 0; i < numberOfPlaces; i++) {
  //   // console.log(numberOfPlaces);
  //   let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
  //   // markerIcon += markerPath + markerLetter + ".png";
  // }
  // console.log(markerIcon)
  marker = new google.maps.Marker({
    position: place["geometry"]["location"],
    map: map,
    // icon: markerIcon,
    animation: google.maps.Animation.DROP
  });
  return marker;

  // google.maps.event.addListener(marker, "click", function () {
  //   // clearResults(markers);
  //   let display = {};
  //   display.name = place.name;
  //   display.vicinity = place.vicinity;

  //   if (place["name"] === undefined) {
  //     place["name"] = "No Available Name";
  //   } else {
  //     place["name"] = place["name"];
  //   }

  //   if (place["vicinity"] === undefined) {
  //     place["vicinity"] = "No Available Address";
  //   } else {
  //     place["vicinity"] = place["vicinity"];
  //   }

  //   let box = new google.maps.InfoWindow({
  //     content: `<h5>${display.name}</h5>
  //   <br>
  // <p>Address: ${display.vicinity}</p>
  // <p>Rating: ${display.rating}</p>`
  //   });

  //   box.open(map, marker);
  // });
  // markers.push(marker);
  // }
  // console.log(marker);

  // function clearResults(markers) {
  //   for (let m in markers) {
  //     markers[m].setMap(null);
  //   }
  //   markers = [];
  // }
}
