// const currentYear = new Date().getFullYear();
// document.getElementById("currentyear").textContent = currentYear;
// document.getElementById(
//   "lastmodified"
// ).textContent = `Last modified: ${document.lastModified}`;

let bar = document.querySelector(".bars");
let xmark = document.querySelector(".xmark");
let mobileView = document.querySelector(".mobile-view");
mobileView.style.display = "none";
let desktop = document.querySelector(".desktop");

bar.addEventListener("click", function () {
  mobileView.style.display = "block";
     desktop.style.display = "none";
     console.log('working')
});

xmark.addEventListener("click", function () {
  mobileView.style.display = "none";
  desktop.style.display = "flex";
});
