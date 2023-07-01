// Retrieve the form element
const contactForm = document.getElementById('contactForm');

// Retrieve the input fields
const emailInput = document.querySelector('#contactForm input[name="email"]');

// Submit form event listener
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting by default

  const emailValue = emailInput.value;

  if (emailValue === emailValue.toLowerCase()) {
    // Validation passed, submit the form
    document.getElementById('error').style.display = 'none'; // Hide the error message
    contactForm.submit();
  } else {
    // Validation failed, show error message
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = 'Email must be in lowercase.';
    errorDiv.style.display = 'block';
  }
});
