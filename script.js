document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("formMessage").innerText =
    "You're in. Future you is now smarter already.";
});