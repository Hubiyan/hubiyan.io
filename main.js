$(document).ready(function () {
  $(".radio-btn").click(function () {
    $(".radio-inner").toggleClass("active");
    $("*").toggleClass("dark");
    localStorage.getItem('dark-mode', 'dark');
  });
});

