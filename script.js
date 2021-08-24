// Used to toggle the menu on small screens when clicking on the menu button
function ResponsiveMenu() {
  let nav_top = document.getElementById("topNav");
  if (nav_top.className.indexOf("w3-show") == -1) {
    nav_top.className += " w3-show";
  } else {
    nav_top.className = nav_top.className.replace(" w3-show", "");
  }
}
