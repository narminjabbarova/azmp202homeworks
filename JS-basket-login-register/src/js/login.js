document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const savedUser = JSON.parse(localStorage.getItem("user"));
  
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert("Login Successful! Redirecting to Home page...");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  