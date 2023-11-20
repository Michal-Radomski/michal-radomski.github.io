// Used to toggle the menu on small screens when clicking on the menu button - W3 Template
function ResponsiveMenu() {
  let nav_top = document.getElementById("topNav");
  // console.log("nav_top:", nav_top);
  // console.log("nav_top.className:", nav_top.className);

  if (nav_top.className.indexOf("w3-show") == -1) {
    nav_top.className += " w3-show";
    // Fixed Responsiveness
    nav_top.style.setProperty("display", "block", "important");
  } else {
    nav_top.className = nav_top.className.replace(" w3-show", "");
    // Fixed Responsiveness
    nav_top.style.setProperty("display", "none", "important");
  }
  // console.log("nav_top.className.indexOf('w3-show'):", nav_top.className.indexOf("w3-show"));
}

// Number of apps
const numberOfApps = document.querySelectorAll(".appTittle").length;
// console.log("numberOfApps:", numberOfApps);

// Adding random textShadow for apps tittle -> h2.appTittle
let randomColorsTitle = randomColor({ count: numberOfApps, luminosity: "light", alpha: 0.85 });
// console.log("randomColorsTitle:", randomColorsTitle);
let titleBGC = document.querySelectorAll("h2.appTittle");
// console.log("titleBGC:", titleBGC);
titleBGC.forEach(
  (elem, i) =>
    (elem.style.textShadow = `0px 0px 35px ${randomColorsTitle[i]}, 0px 0px 35px ${randomColorsTitle[i]},
0px 0px 35px ${randomColorsTitle[i]}, 0px 0px 35px ${randomColorsTitle[i]}`)
);
// Adding random color of the test for apps tittle -> h2.appTittle
let randomColorsTitleText = randomColor({ count: numberOfApps, hue: "red || purple", luminosity: "dark", alpha: 1.0 });
randomColorsTitleText = randomColorsTitleText.reverse();
titleBGC.forEach((elem, i) => (elem.style.color = randomColorsTitleText[i]));

// Random color for text of title and footer
let randomColorsTextTitle = randomColor({ count: 1, hue: "green || blue || pink|| purple", luminosity: "dark", alpha: 0.9 });
document.querySelector("h1.title").style.color = randomColorsTextTitle[0];
let randomColorsTextFooter = randomColor({
  count: 1,
  hue: "orange || yellow || pink|| purple",
  luminosity: "light",
  alpha: 0.9,
});
document.querySelector("#footerInfo").style.color = randomColorsTextFooter[0];

// Displaying the Modal Image
// Getting the Modal
let modal = document.getElementById("modalImage");
// Getting the image and inserting it inside the modal - using its "alt" text as an image caption
let imageNodeList = document.querySelectorAll(".w3-half>img");
// console.log("imageNodeList:", imageNodeList);
let modalImg = document.getElementById("imageBig");
let captionText = document.getElementById("caption");
imageNodeList.forEach(
  (elem) =>
    (elem.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      // console.log("Clicked elem:", elem);
    })
);
// Getting the <span> element that closes the Modal
let spanClose = document.querySelector(".close");
// console.log(spanClose);
// Closing the Modal after a user clicks on <span> (x)
spanClose.onclick = function () {
  modal.style.display = "none";
};
// Closing modal by Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    spanClose.click();
    // modal.style.display = "none";  //* the same what above
  }
});

// Modals
// Credits Modal
function openCreditsModal() {
  document.querySelector("#creditsModal").style.display = "block";
}
// Contact Modal
function openContactModal() {
  document.querySelector("#contactModal").style.display = "block";
}
// Resume Modal
function openResumeModal() {
  document.querySelector("#resumeModal").style.display = "block";
}
// GH 3D Skyline Modal
function openGH3DSkylineModal() {
  document.querySelector("#GH3DSkylineModal").style.display = "block";
}
// Close NavBar Modal by button
closeNavBarModals = document.querySelectorAll(".w3-modal");
// console.log("closeNavBarModals:", closeNavBarModals);
function closeNavBarModal() {
  closeNavBarModals.forEach((elem) => (elem.style.display = "none"));
}
// Closing NavBar Modals by Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeNavBarModals.forEach((elem) => (elem.style.display = "none"));
  }
});

//* Little exercises
// const pics1 = document.body.querySelectorAll("img");
// const pics2 = document.querySelectorAll("img");
// console.log("pics1.length:", pics1.length);
// console.log("pics2.length:", pics2.length);

// const links = document.links;
// const images = document.images;
// console.log("links.length, images.length:", links.length, images.length);
