function loadTodoFromWeb(e)
{
    e.preventDefault();
    console.log("hello")
}

function login(e)
{
    e.preventDefault();
    console.log("Login initiated.")
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value === "admin" && password.value === "12345") {
        console.log("Login successful.")
        document.cookie = "authenticated=true; SameSite=Strict";
        window.location.href = "./index.html";
    } else {
      // perform operation with form input
      console.log("Login failed.")
      document.cookie = "authenticated=false; SameSite=Strict";
    }
    return false;
}