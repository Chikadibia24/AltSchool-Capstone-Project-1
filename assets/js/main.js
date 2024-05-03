// Function Change NAV Background On Scroll Starts here
function changeNavBackground() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementsByClassName(
      "nav-bar"
    )[0].style.backgroundColor = `#000000`;
    document.getElementsByClassName(
      "nav-bar"
    )[0].style.borderBottomColor = `unset`;
  } else {
    document.getElementsByClassName(
      "nav-bar"
    )[0].style.backgroundColor = `unset`;
    document.getElementsByClassName(
      "nav-bar"
    )[0].style.borderBottomColor = `#1B1B1C`;
  }
}
// Function Change NAV Background On Scroll Starts here


// Function Open and Close Side Menu Navigation Starts here
function openSideMenu() {
  document.getElementsByClassName("side-menu")[0].style.width = `300px`;
}

function closeSideMenu() {
  document.getElementsByClassName("side-menu")[0].style.width = `0`;
}
// Function Open and Close Side Menu Navigation Stops here


// Function Open and Close Mobile Menu Navigation Starts here
function openAndCloseMobileMenu() {
  let mobileMenu = document.getElementsByClassName("mobile-nav-container")[0];
  let openCloseIcon = document.getElementsByClassName("open-close-icon")[0];

  if (mobileMenu.style.height !== "100vh") {
    mobileMenu.style.height = "100vh";
    openCloseIcon.innerHTML = "&#x2715;";
    mobileMenu.style.opacity = "1";
    mobileMenu.style.padding = "20px";
  } else {
    mobileMenu.style.height = "0vh";
    openCloseIcon.innerHTML = "&#9776;";
    mobileMenu.style.opacity = "0";
    mobileMenu.style.padding = "20px";
  }
}
// Function Open and Close Mobile Menu Navigation Stops here


// Function Dynamic Section Update Starts here
function dynamicPageUpdate(div){
    document.querySelectorAll(
      ".about-info-display-section-sub-container-child-2"
    ).forEach(item => {
      item.style.display = "none";
    });
  
    document.querySelector(`#${div}`).style.display = "initial";
  }
// Function Dynamic Section Update Stops here


// Function Scroll To The Top Starts here
function scrollToTop() {
  document.body.scrollTop = `1px`;
}
// Function Scroll To The Top ends here





document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("fa-bars-container")[0].onclick =
    openSideMenu;

  document.getElementsByClassName("close-button")[0].onclick = closeSideMenu;

  document.getElementsByClassName("fa-bars-container-mobile")[0].onclick =
    openAndCloseMobileMenu;

  document.getElementsByClassName("footer-div-yellow-bg")[0].onclick =
    scrollToTop;

  window.onscroll = function () {
    changeNavBackground();
  };

  document.querySelectorAll(".bio-data-button").forEach(item => {
    item.onclick = function () {
      dynamicPageUpdate(this.dataset.div);
    }
  });
  
});
