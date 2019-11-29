let northEastClinics = document
  .querySelector(".northeast-clinics")
  .addEventListener("click", () => {
    getNorthClinics();
  });

function getNorthClinics() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3923,103.8948&radius=5000&type=hospital&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
    true
  );

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      loadClinicMarkers(response);
    } else {
      console.log("There is something wrong");
    }
  };

  xhr.send();
}

function loadClinicMarkers(googleData) {
  let northEast = { lat: 1.3923, lng: 103.8948 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: northEast
  });
  let googleObject = Object.entries(googleData)[2][1];
  for (let i = 0; i < googleObject.length; i++) {
    let listOfObjects = googleObject[i];
    addMarkers(map, listOfObjects);
  }
}
