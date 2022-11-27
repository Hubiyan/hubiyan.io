
// $("body", "nav").toggleClass(localStorage.toggled);
// function darkLight() {
  /*DARK CLASS*/
//   if (localStorage.toggled != 'dark') {
//     $('*').toggleClass('dark', true);
//     localStorage.toggled = "dark";
//   } else {
//     $('*').toggleClass('dark', false);
//     localStorage.toggled = "";
//   }
// }
/*Add 'checked' property to input if background == dark*/
// if ($('body').hasClass('dark')) {
//    $( '#checkBox' ).prop( "checked", true )
// } else {
//   $( '#checkBox' ).prop( "checked", false )
// }


  //Top Content Tabs and Description
  $(".tab-list li").on("click", function() {
    var tabId = ".tab-list li#" + $(this).attr("id");
    var tabDivId = ".tabs-content#content-" + $(this).attr("id");
  
    if (!$(this).hasClass("active")) {
      $(".tab-list li").removeClass("active");
      $(this).addClass("active");
  
      $(".tabs-content").removeClass("active");
      $(tabDivId).addClass("active");
    }
  });
  


