// utils.js

// Function to validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  // Function to validate password length
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  // Function to format price (currency format)
  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  }
  
  // Function to display error message
  function displayErrorMessage(message) {
    const errorElement = document.getElementById("error-message");
    if (errorElement) {
      errorElement.innerHTML = message;
      errorElement.style.display = "block";
    }
  }
  
  // Function to hide error message
  function hideErrorMessage() {
    const errorElement = document.getElementById("error-message");
    if (errorElement) {
      errorElement.style.display = "none";
    }
  }
  