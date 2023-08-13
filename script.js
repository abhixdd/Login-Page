document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-btn');
  
  
    loginButton.addEventListener('click', validateForm);
  
  
    function validateForm(event) {
      event.preventDefault();
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username === '' || password === '') {
        alert('Please fill in both fields.');
      } else {
        alert('Login successful!');
        // Here, you can add your actual authentication logic
      }
    }
  });
  