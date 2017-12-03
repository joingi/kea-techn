// Test command

var buttonSidebarIsCollapsed = document.getElementById("btn-sidebar-is-collapsed");
var sidebar = document.querySelector(".sidebar")

var mainLogo = document.querySelector(".mainLogo");
var sidebarMenuLink = document.querySelectorAll('.sidebar-menu-name')



buttonSidebarIsCollapsed.addEventListener("click", function(){
  console.log("X");
  if(sidebar.classList.contains('sidebar-is-collapsed')){

      sidebar.classList.remove('sidebar-is-collapsed')
      mainLogo.classList.remove('mainLogo-is-collapsed')
      for(var i = 0; i < sidebarMenuLink.length; i++){
        sidebarMenuLink[i].classList.remove('sidebarMenuLink-is-collapsed')
      }
  }else{
    sidebar.classList.add('sidebar-is-collapsed');
    mainLogo.classList.add('mainLogo-is-collapsed');
    for(var i = 0; i < sidebarMenuLink.length; i++){
      sidebarMenuLink[i].classList.add('sidebarMenuLink-is-collapsed')
    }

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
