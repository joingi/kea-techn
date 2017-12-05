// Test command

var buttonSidebarIsCollapsed = document.getElementById("btn-sidebar-is-collapsed");
var sidebar = document.querySelector(".sidebar")

var mainLogo = document.querySelector(".mainLogo");
var sidebarMenuLink = document.querySelectorAll('.sidebar-menu-name')
var iconClosed = document.getElementById('close')


buttonSidebarIsCollapsed.addEventListener("click", function(){
  console.log("X");
  if(sidebar.classList.contains('sidebar-is-collapsed')){

      sidebar.classList.remove('sidebar-is-collapsed')
      mainLogo.classList.remove('mainLogo-is-collapsed')
      iconClosed.classList.remove('buttonSidebar-is-collapsed')
      for(var i = 0; i < sidebarMenuLink.length; i++){
        sidebarMenuLink[i].classList.remove('sidebarMenuLink-is-collapsed')
      }
  }else{
    sidebar.classList.add('sidebar-is-collapsed');
    mainLogo.classList.add('mainLogo-is-collapsed');
    iconClosed.classList.add('buttonSidebar-is-collapsed')
    for(var i = 0; i < sidebarMenuLink.length; i++){
      sidebarMenuLink[i].classList.add('sidebarMenuLink-is-collapsed')
    }

  }

})

/* MOBILE  */

btnSidebarMobile = document.getElementById("btnSidebarMobile");
sidebarMobile = document.querySelector(".sidebarMobileContainer")

btnSidebarMobile.addEventListener("click", function(){

  console.log("X");
  if(sidebarMobile.classList.contains('sidebarMobile-is-collapsed')){
      sidebarMobile.classList.remove('sidebarMobile-is-collapsed')
      btnSidebarMobile.classList.remove('burger-is-active')
  }else{
      sidebarMobile.classList.add('sidebarMobile-is-collapsed')
      btnSidebarMobile.classList.add('burger-is-active')
  }

})





// var test = document.getElementById('test')
// (function () {
//   // test.addEventListener("click", function(){
//     // console.log("X")
//     // window.onload = function(){
//
//     // }
//     window.addEventListener('load',
//   function() {
//     alert('hello!');
//   }, false);
//     // window.onload = customerChoice();
//   // })
// }());
// window.addEventListener('load', function() {
//
//   var test = document.getElementById('test');
//
//   test.addEventListener("click", function(){
//     console.log("X");
//   });
//
// }, false);


window.onload = function(){
  document.getElementById('test2').click();
  // return true;
  }


  $(".js-carousel").each(function(){
    var $carousel = $(this),
        $carouselContainer = $carousel.find(".js-carousel-container"),
        $carouselList = $carousel.find(".js-carousel-list"),
        $carouselItem = $carousel.find(".js-carousel-item"),
        $carouselButton = $carousel.find(".js-carousel-button"),
        setItemWidth = function(){
            $carouselList.removeAttr("style");
            var curWidth = $($carouselItem[0]).outerWidth() * $carouselItem.length;
            $carouselList.css("width", curWidth);
        },
        slide = function(){
            var $button = $(this),
                dir = $button.data("dir"),
                curPos = parseInt($carouselList.css("left")) || 0,
                moveto = 0,
                containerWidth = $carouselContainer.outerWidth(),
                listWidth = $carouselList.outerWidth(),
                before = (curPos + containerWidth),
                after = listWidth + (curPos - containerWidth);
            if(dir=="next"){
                moveto = (after < containerWidth) ? curPos - after : curPos - containerWidth;
            } else {
                moveto = (before >= 0) ? 0 : curPos + containerWidth;
            }


            $carouselList.animate({
                left: moveto
            });
        };
    $(window).resize(function(){
        setItemWidth();
    });
    setItemWidth();

    $carouselButton.on("click", slide);
});
