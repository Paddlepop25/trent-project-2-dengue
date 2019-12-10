// These 5 functions are from the dengue-clusters.js file:
// getNorthDengue(), getSouthEastDengue(), getCentralDengue(), getSouthWestDengue(), getSouthWestDengue()

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

// Initialize Google Map

let resetButton = document
  .querySelector(".reset-btn")
  .addEventListener("click", () => {
    initMap();
  });

1;

function initMap() {
  // let infoWindow = new google.maps.InfoWindow();
  let singapore = { lat: 1.35027, lng: 103.821959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });

  let data = map.data.loadGeoJson(
    "assets/nea_files/dengue-clusters-geojson.geojson"
  );

  map.data.addGeoJson(data);

  map.data.setStyle({
    fillColor: "#c82333",
    strokeWeight: 1
  });

  map.data.addListener("click", function(event) {
    let myHTML = event.feature.getProperty("Description");
    // console.log(myHTML)
    let infoWindow = new google.maps.InfoWindow({
      content: `<div>${myHTML}</div>`
    });

    infoWindow.setContent("<div id='cluster-infobox'>" + myHTML + "</div>");
    infoWindow.setPosition(event.latLng);
    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
    infoWindow.open(map);
  });
}