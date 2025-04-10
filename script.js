document.getElementById('signupForm').addEventListener('submit', function (e) {
    const pwd = this.password.value;
    const confirmPwd = this.confirmPassword.value;
  
    if (pwd !== confirmPwd) {
      alert('Passwords do not match!');
      e.preventDefault();
    }
  });
  