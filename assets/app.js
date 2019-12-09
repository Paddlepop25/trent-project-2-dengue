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

function initMap() {
  let singapore = { lat: 1.35027, lng: 103.821959 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });

  let data = map.data.loadGeoJson("assets/nea_files/dengue-clusters-geojson.geojson");

  map.data.addGeoJson(data);

  map.data.setStyle({
    fillColor: "#c82333",
    strokeWeight: 1
  });
}
