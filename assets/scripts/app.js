// Hide dropdown menu of navbar after clicking on any anchor tag
let navBarNav = document.querySelector(".navbar-nav");
let aTaginnavBarNav = navBarNav.getElementsByTagName("a");
let navBarCollapse = document.querySelector("#navbarNavAltMarkup");

Array.from(aTaginnavBarNav).forEach(e => {
  e.addEventListener("click", function (e) {
    navBarCollapse.classList.remove("show");
  });
});

let randomMosquito = document.querySelector(".small-mosquito")

function slapRandomMosquito() {
  randomMosquito.addEventListener("mouseenter", function () {
    document.body.style.cursor = "pointer";
    // document.body.style.cursor = url("http://www.rw-designer.com/cursor-detail/20350");
    // document.body.style.cursor = "assets/images/swatter.png";
  })

  randomMosquito.addEventListener("click", function () {
    randomMosquito.src = "assets/images/splat.png";
  })

  if (randomMosquito.src === "assets/images/splat.png") {
    // console.log("move on");
  }

  randomMosquito.addEventListener("mouseout", function () {
    document.body.style.cursor = "default";
  })
  // randomMosquito.addEventListener("click", function () {

  // })

}

slapRandomMosquito()
// console.log(randomMosquito)

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
let singaporeButton = document
  .querySelector(".singapore")
  .addEventListener("click", () => {
    initMap();
  });

function initMap() {
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

  map.data.addListener("click", function (event) {
    let myHTML = event.feature.getProperty("Description");
    let infoWindow = new google.maps.InfoWindow({
      content: `<div>${myHTML}</div>`
    });

    infoWindow.setContent("<div id='cluster-infobox'>" + myHTML + "</div>");
    infoWindow.setPosition(event.latLng);
    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
    infoWindow.open(map);
  });
}
