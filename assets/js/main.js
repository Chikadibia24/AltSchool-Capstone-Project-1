// Side Menu Navigations Starts here
function openSideMenu() {
  document.getElementsByClassName("side-menu")[0].style.width = `300px`;
}

function closeSideMenu() {
  document.getElementsByClassName("side-menu")[0].style.width = `0`;
}
// Side Menu Navigation Stops here


function openAndCloseMobileMenu() {
  let mobileMenu = document.getElementsByClassName("mobile-nav-container")[0];
  let openCloseIcon = document.getElementsByClassName("open-close-icon")[0];

  if (mobileMenu.style.height !== '100%') {
    mobileMenu.style.height = "100%";
    openCloseIcon.innerHTML = "&#x2715;";
    mobileMenu.style.opacity = "1";
    mobileMenu.style.padding = "20px";
    
  } else {
    mobileMenu.style.height = "0%";
    openCloseIcon.innerHTML = "&#9776;";
    mobileMenu.style.opacity = "0";
    mobileMenu.style.padding = "20px";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementsByClassName("fa-bars-container")[0].onclick =
    openSideMenu;

  document.getElementsByClassName("close-button")[0].onclick = closeSideMenu;

  document.getElementsByClassName("fa-bars-container-mobile")[0].onclick =
    openAndCloseMobileMenu;
  
}

)



// &#x2715;
