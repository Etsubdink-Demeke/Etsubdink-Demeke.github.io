// Retrieve the form element
var form = document.getElementById("contactForm");

// Load form data from local storage if available
var formData = JSON.parse(localStorage.getItem("formData")) || {};

// Pre-fill form fields with stored data
form.name.value = formData.name || "";
form.email.value = formData.email || "";
form.comment.value = formData.comment || "";

// Save form data to local storage when input fields change
form.addEventListener("input", function() {
  formData.name = form.name.value;
  formData.email = form.email.value;
  formData.comment = form.comment.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});
