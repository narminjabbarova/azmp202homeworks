document.getElementById("signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    localStorage.setItem("user", JSON.stringify({ email, password }));
  
    alert("Sign Up Successful! Redirecting to Login page...");
    window.location.href = "login.html";
  });
  