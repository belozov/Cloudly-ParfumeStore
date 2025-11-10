let users = JSON.parse(localStorage.getItem('users')) || [
                                                           { username: "admin", password: "admin123" },
                                                           { username: "user", password: "1234" }
                                                         ];

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

showRegister.addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

showLogin.addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find(u => u.username === username && u.password === password);

  if(user) {
    window.location.href = "Profile.html";
  } else {
    alert("Invalid username or password!");
  }
});

registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  const userExists = users.some(u => u.username === username);
  if(userExists) {
    alert("Username already exists!");
  } else {
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful!");
    registerForm.reset();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }
});
