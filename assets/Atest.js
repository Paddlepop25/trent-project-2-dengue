$.getJSON(
  "/nea_files/A areas-with-high-aedes-population test/areas-with-high-aedes-population-geojson.json",
  function newLatLong(featureFile) {
    var polygonCoords = [];
    let coords = featureFile["features"][1]["geometry"]["coordinates"][0];

    for (let i = 0; i < coords.length; i++) {
      for (let c = 0; c < 2; c++) {
        if (c == 1) continue;
        polygonCoords.push([coords[i][0], coords[i][1]]);
      }
    }
    return polygonCoords;
  }
);
