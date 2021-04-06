function animateMenu() {
  let bodyElement = document.getElementsByTagName("body")[0];

  if (bodyElement.classList.contains("menu-opening")) {
    closeMenu(bodyElement);
  } else {
    openMenu(bodyElement);
  }
}

function openMenu(bodyElement) {
  bodyElement.classList.add("menu-opening");

  let menuElement = document.getElementById("menu")
  menuElement.classList.add("menu-animate");
}

function closeMenu(bodyElement) {
  bodyElement ||= document.getElementsByTagName("body")[0];
  bodyElement.classList.remove("menu-opening");
}
