let body = document.querySelector(".body");
window.addEventListener("load", function() {
  setTimeout(function() {
    loding.style.transition = "opacity 1s";
    loding.style.opacity = "0";
    setTimeout(function() {

      loding.style.display = "none";
      body.style.overflow = "auto";
    }, 2000);
  }, 0);
})