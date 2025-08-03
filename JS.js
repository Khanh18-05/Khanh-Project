document.addEventListener("DOMContentLoaded", () => {
  console.log("Trang web VSTA đã sẵn sàng!");
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
