// These 5 functions below are called from the apps.js file

function getNorthDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "assets/nea_files/dengue-cases-north-east-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "#ffd500",
    strokeWeight: 1
  });
}

function getCentralDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "assets/nea_files/dengue-cases-central-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "#59b7ff",
    strokeWeight: 1
  });
}

function getSouthEastDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "assets/nea_files/dengue-cases-south-east-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "#93ee93",
    strokeWeight: 1
  });
}

function getSouthWestDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "assets/nea_files/dengue-cases-south-west-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "#d380fa",
    strokeWeight: 1
  });
}


