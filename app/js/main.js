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

// var readyStateCheckInterval = setInterval(function() {
//     if (document.readyState === "complete") {
//         clearInterval(readyStateCheckInterval);
//         init();
//
//
//
//     }
// }, 10);
