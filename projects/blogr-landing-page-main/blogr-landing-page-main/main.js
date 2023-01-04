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

  const menuContent = document.getElementsByClassName("menuContent");
  const hideMenuContent = document.getElementsByClassName("hideMenuContent");
  const showMenuContent = document.getElementsByClassName("showMenuContent");

  if (menuContent[0].style.display == "none") {

    menuContent[0].style.display = "block";
    menuContent[1].style.display = "none";
    menuContent[2].style.display = "none";

    showMenuContent[0].style.display = "none";
    showMenuContent[1].style.display = "block";
    showMenuContent[2].style.display = "block";

    hideMenuContent[0].style.display = "block";
    hideMenuContent[1].style.display = "none";
    hideMenuContent[2].style.display = "none";
  } else {
    menuContent[0].style.display = "none";
    showMenuContent[0].style.display = "block";
    hideMenuContent[0].style.display = "none";
  }
}

function displayMenuContent1() {

  const menuContent = document.getElementsByClassName("menuContent");
  const hideMenuContent = document.getElementsByClassName("hideMenuContent");
  const showMenuContent = document.getElementsByClassName("showMenuContent");

  if (menuContent[1].style.display == "none") {

    menuContent[0].style.display = "none";
    menuContent[1].style.display = "block";
    menuContent[2].style.display = "none";

    showMenuContent[0].style.display = "block";
    showMenuContent[1].style.display = "none";
    showMenuContent[2].style.display = "block";

    hideMenuContent[0].style.display = "none";
    hideMenuContent[1].style.display = "block";
    hideMenuContent[2].style.display = "none";
  } else {
    menuContent[1].style.display = "none";
    showMenuContent[1].style.display = "block";
    hideMenuContent[1].style.display = "none";
  }
}

function displayMenuContent2() {

  const menuContent = document.getElementsByClassName("menuContent");
  const hideMenuContent = document.getElementsByClassName("hideMenuContent");
  const showMenuContent = document.getElementsByClassName("showMenuContent");

  if (menuContent[2].style.display == "none") {

    menuContent[0].style.display = "none";
    menuContent[1].style.display = "none";
    menuContent[2].style.display = "block";
  
    showMenuContent[0].style.display = "block";
    showMenuContent[1].style.display = "block";
    showMenuContent[2].style.display = "none";
  
    hideMenuContent[0].style.display = "none";
    hideMenuContent[1].style.display = "none";
    hideMenuContent[2].style.display = "block";
  } else {
    menuContent[2].style.display = "none";
    showMenuContent[2].style.display = "block";
    hideMenuContent[2].style.display = "none";
  }
}