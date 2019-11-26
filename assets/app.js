// var map;
// function initMap() {
//   let singapore = { lat: 1.29027, lng: 103.851959 };
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: singapore,
//     zoom: 12
//   });

//   let marker = new google.maps.Marker({ position: singapore, map: map });
// }

// var map;

// function initMap() {
//   let kml1 = { lat: 1.3503086435268, lng: 103.952109671193 };
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: kml1,
//     zoom: 12
//   });

//   let marker = new google.maps.Marker({ position: kml1, map: map });
// }

var map;

function initMap() {
  let singapore = { lat: 1.29027, lng: 103.851959 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: singapore,
    zoom: 11
  });

  let destinations = new google.maps.MVCArray();
  destinations.push(new google.maps.LatLng(103.952109671193, 1.3503086435268));
  destinations.push(
    new google.maps.LatLng(103.952024903975996, 1.35027882272273)
  );
  destinations.push(
    new google.maps.LatLng(103.951821994379003, 1.35079625373263)
  );
  destinations.push(
    new google.maps.LatLng(103.951777809174004, 1.35090250311823)
  );
  destinations.push(
    new google.maps.LatLng(103.951771863185996, 1.35091680228515)
  );
  destinations.push(
    new google.maps.LatLng(103.951671200974005, 1.35115885803187)
  );
  destinations.push(new google.maps.LatLng(103.952109671193, 1.3503086435268));

  let polylineOptions = {
    path: destinations,
    strokeColor: "ff0000",
    strokeWeight: 5
  };

  let polyline = new google.maps.Polyline(polylineOptions);
  polyline.setMap(map);

  let marker = new google.maps.Marker({ position: singapore, map: map });
}
