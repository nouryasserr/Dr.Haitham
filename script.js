// nav-calling
document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});
// end-nav-calling
