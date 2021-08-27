// Used to toggle the menu on small screens when clicking on the menu button - W3 Template
function ResponsiveMenu() {
  let nav_top = document.getElementById("topNav");
  if (nav_top.className.indexOf("w3-show") == -1) {
    nav_top.className += " w3-show";
  } else {
    nav_top.className = nav_top.className.replace(" w3-show", "");
  }
}

// Adding random textShadow for apps tittle -> h2
let randomColorsTitle = randomColor({count: 4, luminosity: "bright", alpha: 0.5});
// console.log("randomColorsTitle:", randomColorsTitle);
let titleBGC = document.querySelectorAll("h2.ubuntuFonts");
// console.log("titleBGC:", titleBGC);
titleBGC.forEach(
  (elem, i) =>
    (elem.style.textShadow = `0px 0px 35px ${randomColorsTitle[i]}, 0px 0px 35px ${randomColorsTitle[i]},
0px 0px 35px ${randomColorsTitle[i]}, 0px 0px 35px ${randomColorsTitle[i]}`)
);
// Adding random color of the test for apps tittle -> h2
let randomColorsTitleText = randomColor({count: 4, hue: "red || purple", luminosity: "dark", alpha: 1.0});
randomColorsTitleText = randomColorsTitleText.reverse();
titleBGC.forEach((elem, i) => (elem.style.color = randomColorsTitleText[i]));

// Random color for text of title and footer
let randomColorsText = randomColor({count: 2, hue: "green || blue", luminosity: "dark", alpha: 0.9});
document.querySelector("#footerInfo").style.color = randomColorsText[0];
document.querySelector("h1.title").style.color = randomColorsText[1];

// -----------------------
// Get the modal
let modal = document.getElementById("modalImage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelectorAll(".w3-half>img");
console.log(img);
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.forEach(
  (elem) =>
    (elem.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    })
);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
