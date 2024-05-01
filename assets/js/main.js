// Side Menu Navigations Starts here
function openSideMenu() {
  document.getElementsByClassName("side-menu")[0].style.width = `350px`;
}

function closeSideMenu() {
  document.getElementsByClassName("side-menu")[0].style.width = `0`;
}
// Side Menu Navigation Stops here


function openAndCloseMobileMenu() {
  let mobileMenu = document.getElementsByClassName("mobile-nav-container")[0];
  let openCloseIcon = document.getElementsByClassName("open-close-icon")[0];
  if (mobileMenu.style.height === '0%') {
    mobileMenu.style.height = '100%';
    mobileMenu.style.padding = '20px';
    openCloseIcon.innerHTML = "&#x2715;";
  } else {
    mobileMenu.style.height = '0%';
    mobileMenu.style.padding = "0";
    openCloseIcon.innerHTML = "&#9776;";
  }
}



// &#x2715;
