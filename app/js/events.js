// Test command

var buttonSidebarIsCollapsed = document.getElementById("btn-sidebar-is-collapsed");
var sidebar = document.querySelector(".sidebar")

var mainLogo = document.querySelector(".mainLogo");
var sidebarMenuLink = document.querySelectorAll('.sidebar-menu-name');
var iconClosed = document.getElementById('close');


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


// btnCloseEditUser = document.getElementById("btnCloseEditUser");
var btnEditUser = document.getElementById("btnEditUser");
var editUser = document.getElementById("editUser");

btnEditUser.addEventListener("click", function(){
  if(editUser.classList.contains('editUser-is-collapsed')){
    console.log("mama")
  }else{
    editUser.classList.add('editUser-is-collapsed');
  }

});

btnCloseEditUser.addEventListener("click", function(){
  if(editUser.classList.contains('editUser-is-collapsed')){
      editUser.classList.remove('editUser-is-collapsed');
  }else{
    console.log("ASD")
  }

});

// for(var i = 0; i < btnEditUser.length; i++){
//   btnEditUser[i].addEventListener("click", function(){
//     if(editUser.classList.contains('editUser-is-collapsed')){
//       editUser.classList.remove('editUser-is-collapsed');
//         console.log("xxx")
//     }else{
//         editUser.classList.add('editUser-is-collapsed');
//         console.log("YYY")
//     }
//   });
// }
// btnEditUser.addEventListener("click", function(){
//
//   editUser.classList.add('editUser-is-collapsed');
//     console.log("YYY")
// });

// btnCloseEditUser.addEventListener("click", function(){
//
//   editUser.classList.remove('editUser-is-collapsed');
//   console.log("XX")
// });



// mja = document.activeElement.style.fill = "red"
//
// mja.addEventListener("click",function(e){
//     e.target.parentElement.style.fill=" rgb(215, 155, 255);";
// });


function mja(){
  console.log("X")
}
