function getNorthDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "/nea_files/dengue-cases-north-east-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "red",
    strokeWeight: 1
  });
}

function getSouthEastDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "/nea_files/dengue-cases-south-east-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "blue",
    strokeWeight: 1
  });
}

function getSouthWestDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "/nea_files/dengue-cases-south-west-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "purple",
    strokeWeight: 1
  });
}

function getCentralDengue() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 1.35027, lng: 103.821959 }
  });
  data = map.data.loadGeoJson(
    "/nea_files/dengue-cases-central-geojson.geojson"
  );
  map.data.addGeoJson(data);
  map.data.setStyle({
    fillColor: "gray",
    strokeWeight: 1
  });
}
