const sideDropdown1 = document.querySelector(".side-dropdown1");
const sideItems1 = document.querySelector(".side-items1");
const arrowDown1 = document.querySelector(".arrow1");

sideDropdown1.addEventListener("click", function() {
    sideItems1.classList.toggle("menu-active");
    arrowDown1.classList.toggle("arrow-active");
});

const menuBar = document.querySelector(".menu-bar");
const sideBar = document.querySelector(".sidebar");
const bgSidebar = document.querySelector(".bg-sidebar");

menuBar.addEventListener("click", function() {
  sideBar.classList.toggle("active");
  bgSidebar.classList.toggle("bg-active");
});

bgSidebar.addEventListener("click", function() {
    sideBar.classList.remove("active");
    this.classList.remove("bg-active");
});


