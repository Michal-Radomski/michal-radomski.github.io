// Used to toggle the menu on small screens when clicking on the menu button - W3 Template
function ResponsiveMenu() {
  let nav_top = document.getElementById("topNav");
  if (nav_top.className.indexOf("w3-show") == -1) {
    nav_top.className += " w3-show";
  } else {
    nav_top.className = nav_top.className.replace(" w3-show", "");
  }
}

// Adding random BGC for apps tittle -> h2
let randomColorsTitle = randomColor({count: 4, luminosity: "bright", alpha: 0.8});
// console.log("randomColorsTitle:", randomColorsTitle);
let titleBGC = document.querySelectorAll("h2.ubuntuFonts");
// console.log("titleBGC:", titleBGC);
titleBGC.forEach(
  (elem, i) =>
    (elem.style.textShadow = `0px 0px 35px ${randomColorsTitle[i]}, 0px 0px 35px ${randomColorsTitle[i]},
0px 0px 35px ${randomColorsTitle[i]}, 0px 0px 35px ${randomColorsTitle[i]}`)
);

// Random color for text and textShadow of title and footer
let randomColorsText = randomColor({count: 2, luminosity: "dark", alpha: 0.9});
let randomColorsTextShadow = randomColor({count: 2, luminosity: "light", alpha: 0.4});
let infoText = [];
infoText[0] = document.querySelector("h1.title");
infoText[1] = document.querySelector("#footerInfo");
for (let i = 0; i < infoText.length; i++) {
  infoText[i].style.color = randomColorsText[i];
  infoText[i].style.textShadow = `0px 0px 35px ${randomColorsTextShadow[i]}, 0px 0px 35px ${randomColorsTextShadow[i]},
  0px 0px 35px ${randomColorsTextShadow[i]}, 0px 0px 35px ${randomColorsTextShadow[i]}`;
}
