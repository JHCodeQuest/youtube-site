document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText =
    "Thanks for subscribing!";
});