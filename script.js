// Used to toggle the menu on small screens when clicking on the menu button - W3 Template
function ResponsiveMenu() {
  let nav_top = document.getElementById("topNav");
  if (nav_top.className.indexOf("w3-show") == -1) {
    nav_top.className += " w3-show";
  } else {
    nav_top.className = nav_top.className.replace(" w3-show", "");
  }
}

//Adding random BGC for header > h2
let randomColors = randomColor({count: 3, luminosity: "light", alpha: 0.8});
// console.log("randomColors:", randomColors);
document.querySelector("h1.title").style.textShadow = `0px 0px 35px ${randomColors[0]}, 0px 0px 35px ${randomColors[0]},
0px 0px 35px ${randomColors[0]}, 0px 0px 35px ${randomColors[0]}`;
