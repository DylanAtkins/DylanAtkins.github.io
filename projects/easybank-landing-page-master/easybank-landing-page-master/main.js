function displayMenu() {
  document.getElementsByClassName("menu")[0].style.display = "block";
  document.getElementsByClassName("openMenu")[0].style.display = "none";
  document.getElementsByClassName("closeMenu")[0].style.display = "block";
}

function hideMenu() {
  document.getElementsByClassName("menu")[0].style.display = "none";
  document.getElementsByClassName("openMenu")[0].style.display = "block";
  document.getElementsByClassName("closeMenu")[0].style.display = "none";
}