let map;
let infoWindow;
let request;
let service;
let markers = [];
let currentSelectedMode;

google.maps.event.addDomListener(window, "load", initMap);

function initMap() {
  let singapore = { lat: 1.3521, lng: 103.8198 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: singapore
  });

  function supermarket() {
    infowindow.open(map, marker);
  }
  $("#button1").click(function(load) {
    (document.getElementById("display_filter_selection_id").innerHTML =
      "You have selected : Supermarkets"),
      (request = {
        location: singapore,
        radius: 5000,
        types: ["supermarket"]
      });

    clearResults(markers);

    currentSelectedMode = "supermarket";
    service.nearbySearch(request, callback);
  });

  infoWindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, callback);

  google.maps.event.addListener(map, "rightclick", function(event) {
    // console.log(event);
    map.setCenter(event.latLng);
    clearResults(markers);

    if (currentSelectedMode == "supermarket") {
      let request = {
        location: event.latLng,
        radius: 5000,
        types: ["supermarket"],
        fields: ["basic", "contact", "atmosphere"]
      };
      service.nearbySearch(request, callback);
    }

    if (currentSelectedMode == "meal_delivery") {
      let request = {
        location: event.latLng,
        radius: 5000,
        types: ["meal_delivery"],
        fields: ["basic", "contact", "atmosphere"]
      };
      service.nearbySearch(request, callback);
    }

    if (currentSelectedMode == "meal_takeaway") {
      let request = {
        location: event.latLng,
        radius: 5000,
        types: ["meal_takeaway"],
        fields: ["basic", "contact", "atmosphere"]
      };
      service.nearbySearch(request, callback);
    }

    if (currentSelectedMode == "mall") {
      let request = {
        location: event.latLng,
        radius: 5000,
        types: ["mall"],
        fields: ["basic", "contact", "atmosphere"]
      };
      service.nearbySearch(request, callback);
    }

    if (currentSelectedMode == "cafe") {
      let request = {
        location: event.latLng,
        radius: 5000,
        types: ["cafe"],
        fields: ["basic", "contact", "atmosphere"]
      };
      service.nearbySearch(request, callback);
    }

    if (currentSelectedMode == "restaurant") {
      let request = {
        location: event.latLng,
        radius: 5000,
        types: ["restaurant"],
        fields: ["basic", "contact", "atmosphere"]
      };
      service.nearbySearch(request, callback);
    }
  });

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        markers.push(createMarker(results[i]));
      }
    }
  }

  function createMarker(place) {
    // console.log(place);
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      fields: ["basic", "contact", "atmosphere"]
    });

    google.maps.event.addListener(marker, "click", function() {
      console.log(place);

      let display = {};

      display.name = place.name;

      if (place.rating === undefined) {
        display.rating = "No Available Ratings";
      } else {
        display.rating = place.rating;
      }

      if (place.price_level === undefined) {
        display.price_level = "No Available Pricing";
      } else {
        display.price_level = place.price_level;
      }

      if (place.vicinity === undefined) {
        display.vicinity = "No Available Address";
      } else {
        display.vicinity = place.vicinity;
        console.log(display.vicinity);
      }

      let content = `<h3>${display.name}</h3>
            <p>Address: ${display.vicinity}</p>
            <p>Rating: ${display.rating}</p>
            <p>Price Level: ${display.price_level}</p>`;

      infoWindow.setContent(place.name);
      infoWindow.setContent(place.place_id);
      infoWindow.setContent(content);
      infoWindow.open(map, this);
    });
    return marker;
  }

  function clearResults(markers) {
    for (let m in markers) {
      markers[m].setMap(null);
    }
    markers = [];
  }
}
