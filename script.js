document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
  fetch("assets/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
