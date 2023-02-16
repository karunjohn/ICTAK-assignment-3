let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);

function login(e)
{
    e.preventDefault();
    console.log("Login initiated.")
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value === "admin" && password.value === "12345") {
        console.log("Login successful.")
        window.location.href = "/index.html";
    } else {
      // perform operation with form input
      console.log("Login failed.")
    }
    return false;
}