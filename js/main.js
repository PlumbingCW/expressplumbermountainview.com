(function () {
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  if (!toggle || !drawer || !overlay) { return; }
  var BREAK = 900;
  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }
  toggle.addEventListener("click", function () {
    if (toggle.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
  });
  if (closeBtn) { closeBtn.addEventListener("click", closeDrawer); }
  overlay.addEventListener("click", closeDrawer);
  var links = drawer.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeDrawer); }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
  window.addEventListener("resize", function () { if (window.innerWidth > BREAK) { closeDrawer(); } });
})();
