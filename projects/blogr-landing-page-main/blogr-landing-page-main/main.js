function showMenu() {
  document.getElementsByClassName("navBarContent")[0].style.display = "block";
  document.getElementsByClassName("openMenu")[0].style.display = "none";
  document.getElementsByClassName("closeMenu")[0].style.display = "block";
}

function closeMenu() {
  document.getElementsByClassName("navBarContent")[0].style.display = "none";
  document.getElementsByClassName("openMenu")[0].style.display = "block";
  document.getElementsByClassName("closeMenu")[0].style.display = "none";
}

function displayMenuContent0() {
  document.getElementsByClassName("menuContent")[0].style.display = "block";
  document.getElementsByClassName("menuContent")[1].style.display = "none";
  document.getElementsByClassName("menuContent")[2].style.display = "none";

  document.getElementsByClassName("showMenuContent")[0].style.display = "none";
  document.getElementsByClassName("showMenuContent")[1].style.display = "block";
  document.getElementsByClassName("showMenuContent")[2].style.display = "block";

  document.getElementsByClassName("hideMenuContent")[0].style.display = "block";
  document.getElementsByClassName("hideMenuContent")[1].style.display = "none";
  document.getElementsByClassName("hideMenuContent")[2].style.display = "none";
}

function displayMenuContent1() {
  document.getElementsByClassName("menuContent")[0].style.display = "none";
  document.getElementsByClassName("menuContent")[1].style.display = "block";
  document.getElementsByClassName("menuContent")[2].style.display = "none";

  document.getElementsByClassName("showMenuContent")[0].style.display = "block";
  document.getElementsByClassName("showMenuContent")[1].style.display = "none";
  document.getElementsByClassName("showMenuContent")[2].style.display = "block";

  document.getElementsByClassName("hideMenuContent")[0].style.display = "none";
  document.getElementsByClassName("hideMenuContent")[1].style.display = "block";
  document.getElementsByClassName("hideMenuContent")[2].style.display = "none";
}

function displayMenuContent2() {
  document.getElementsByClassName("menuContent")[0].style.display = "none";
  document.getElementsByClassName("menuContent")[1].style.display = "none";
  document.getElementsByClassName("menuContent")[2].style.display = "block";

  document.getElementsByClassName("showMenuContent")[0].style.display = "block";
  document.getElementsByClassName("showMenuContent")[1].style.display = "block";
  document.getElementsByClassName("showMenuContent")[2].style.display = "none";

  document.getElementsByClassName("hideMenuContent")[0].style.display = "none";
  document.getElementsByClassName("hideMenuContent")[1].style.display = "none";
  document.getElementsByClassName("hideMenuContent")[2].style.display = "block";
}

function hideMenuContent0() {
  document.getElementsByClassName("menuContent")[0].style.display = "none";
  document.getElementsByClassName("showMenuContent")[0].style.display = "block";
  document.getElementsByClassName("hideMenuContent")[0].style.display = "none";
}

function hideMenuContent1() {
  document.getElementsByClassName("menuContent")[1].style.display = "none";
  document.getElementsByClassName("showMenuContent")[1].style.display = "block";
  document.getElementsByClassName("hideMenuContent")[1].style.display = "none";
}

function hideMenuContent2() {
  document.getElementsByClassName("menuContent")[2].style.display = "none";
  document.getElementsByClassName("showMenuContent")[2].style.display = "block";
  document.getElementsByClassName("hideMenuContent")[2].style.display = "none";
}