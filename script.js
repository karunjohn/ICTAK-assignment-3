function loadTodoFromWeb(e)
{
    e.preventDefault();
    console.log("hello")
}

function redirectToMain()
{
    window.location.href = "./index.html";
}

function login(e, redirect)
{
    e.preventDefault();
    console.log("Login initiated.")
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value === "admin" && password.value === "12345") {
        console.log("Login successful.")
        document.cookie = "authenticated=true; SameSite=Strict";
        // callback function
        redirect();
    } else {
      // perform operation with form input
      console.log("Login failed.")
      deleteAuthenticationCookie()
    }
}

function deleteAuthenticationCookie()
{
    document.cookie = "authenticated=; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function logout(e)
{
    e.preventDefault();
    console.log("Initiating logout.")
    deleteAuthenticationCookie();
    console.log("Logout completed. Redirecting to ./login.html .")
    window.location.href = "./login.html";
}