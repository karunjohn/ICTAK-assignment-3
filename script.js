function loadTodoFromWeb(e)
{
    e.preventDefault();
    console.log("hello")
        var xmlhttp = new XMLHttpRequest();
        var url = "https://jsonplaceholder.typicode.com/todos";
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                renderTodoList(response);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        
        
        function renderTodoList(response) {

            var out = '<div class="list-group list-group-numbered">';
            var i;
            for(i = 0; i < response.length; i++) {
                if(response[i].completed === true)
                {
                    console.log("disabled")
                    out += '<label class="list-group-item disabled" aria-disabled="true"><input class="form-check-input me-1" type="checkbox" value="" disabled="true" checked>' + response[i].title + '</label>';
                }
                else if(response[i].completed === false)
                {
                    out += '<label class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="">' + response[i].title + '</label>';
                }
            }
            out += "</div>"
            document.getElementById("webContent").innerHTML = out;
        }
   
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