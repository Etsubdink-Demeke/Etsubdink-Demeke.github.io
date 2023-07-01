document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
  
    var emailInput = document.querySelector("#contactForm input[name='email']");
    var emailValue = emailInput.value;
  
    if (emailValue === emailValue.toLowerCase()) {
      // Validation passed, submit the form
      this.submit();
    } else {
      // Validation failed, show error message
      var errorDiv = document.getElementById("error");
      errorDiv.innerText = "Email must be in lowercase.";
      errorDiv.style.display = "block";
    }
  });
  