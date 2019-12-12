let anchorlinks = document.querySelectorAll('a[href^="#"]');

let home = document.querySelector(".navbar-nav a");

for (let item of anchorlinks) {
  item.addEventListener("click", e => {
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    // if (item === home) {
    //   console.log(home);
    // }
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}
