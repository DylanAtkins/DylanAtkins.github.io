function displayNav() {
  document.getElementById("mobileNav").style.display = "block";
  document.getElementsByClassName("mobileMenu")[0].style.display = "none";
  document.getElementsByClassName("closeMenu")[0].style.display = "block";
}

function closeNav() {
  document.getElementById("mobileNav").style.display = "none";
  document.getElementsByClassName("mobileMenu")[0].style.display ="block";
  document.getElementsByClassName("closeMenu")[0].style.display = "none";
}