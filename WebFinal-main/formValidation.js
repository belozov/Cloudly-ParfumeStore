    function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?\d[\d\s\-\(\)]{7,}$/;

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if (password !== confirm) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Profile successfully updated!");
  return true;
}
