document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("formMessage").innerText =
        "You're in. Future you is now smarter already.";
      form.reset();
    } else {
      document.getElementById("formMessage").innerText =
        "Oops! Something went wrong. Please try again.";
    }
  })
  .catch(error => {
    document.getElementById("formMessage").innerText =
      "Oops! Something went wrong. Please try again.";
  });
});