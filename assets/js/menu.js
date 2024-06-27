document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".open_mobile-nav");
  const mobileNav = document.getElementById("myTopnav");
  const navItems = document.querySelectorAll(".nav_bar.mobile .nav_bar-list");

  menuIcon.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
  });

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      mobileNav.classList.remove("active");
    });
  });
});
