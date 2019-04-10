document.addEventListener("DOMContentLoaded", function () {
  //first bootstrap
  //var windowWidth = window.innerWidth;
  menuControls(window.innerWidth);

  window.addEventListener('resize', function () {
    menuControls(window.innerWidth);
  });

  document.querySelector('.MobileMenu-Button').addEventListener('click', function (event) {
    var menuButtonClass = "fa-bars";
    var closeButtonClass = "fa-times";

    event.currentTarget.firstElementChild.classList.toggle(menuButtonClass);
    event.currentTarget.firstElementChild.classList.toggle(closeButtonClass);
    document.querySelector('.TopMenu').classList.toggle('TopMenu_Show');
  });

  document.querySelector('.TopMenu').addEventListener('click', function (event) {
    //console.log('current', event.currentTarget);
    //console.log('target', event.target);
    if (event.target.classList.contains('TopMenu-Link') || (event.target.parentNode.classList.contains('TopMenu-Link'))) {
      //console.log(event.target.tagName);
      if ((event.target.firstElementChild !== null && event.target.firstElementChild.tagName === 'svg') || event.target.tagName === 'svg' || event.target.parentNode.tagName === 'svg') {
        event.target.classList.toggle('TopMenu-Link_Open');
        /* if (event.target.classList.contains('TopMenu-Link_Open')) {
          event.target.classList.remove('TopMenu-Link_Open');
        } else {
          event.target.classList.add('TopMenu-Link_Open');
        } */


        //event.target.classList.toggle('TopMenu-Link_Open');
        //event.target.nextElementSibling.style.display = "block";
      }
    }
  });





});

function menuControls(winWidth) {
  //mouseenter
  if (winWidth < 449) {

    document.querySelector('.TopMenu').addEventListener('mouseenter', function (event) {
      console.log('eee', event.target);

      if (event.target.classList.contains('TopMenu-Link')) {
        event.preventDefault();

      }
    });
  }
}