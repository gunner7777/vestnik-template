document.addEventListener("DOMContentLoaded", function () {
  //first bootstrap
  var windowWidth = window.innerWidth;

  window.addEventListener("resize", function () {
    windowWidth = window.innerWidth;
  });

  document
    .querySelector(".MobileMenu-Button")
    .addEventListener("click", function (event) {
      var menuButtonClass = "fa-bars";
      var closeButtonClass = "fa-times";

      event.currentTarget.firstElementChild.classList.toggle(menuButtonClass);
      event.currentTarget.firstElementChild.classList.toggle(closeButtonClass);
      document.querySelector(".TopMenu").classList.toggle("TopMenu_Show");
    });

  var menuLinks = document.querySelectorAll(".TopMenu-Link");
  menuLinks.forEach(link => {
    link.addEventListener("mouseenter", function (event) {
      if (windowWidth > 505) {
        var menuLink = event.currentTarget;
        if (menuLink.childNodes.length > 1) {
          menuLink.nextElementSibling.classList.add("SubMenu_Show");
        }
      }
    });

    link.addEventListener("mouseleave", function (event) {
      if (windowWidth > 505) {
        var menuLink = event.currentTarget;
        if (menuLink.childNodes.length > 1) {
          menuLink.nextElementSibling.classList.remove("SubMenu_Show");
        }
      }
    });

    link.addEventListener("click", function (event) {
      var menuLink = event.currentTarget;
      if (menuLink.childNodes.length > 1) {
        event.preventDefault();
      }

      if (windowWidth <= 505) {
        event.preventDefault();
        if (menuLink.childNodes.length > 1) {
          menuLink.classList.toggle("TopMenu-Link_Open");
        }
      }
    });
  });
});