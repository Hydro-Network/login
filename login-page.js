const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
var newWin = window.open
function MyWindow1()

var win = window.open()
var iframe = win.document.createElement('iframe')
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.src = "https://hydro-network.gq.infinityfreeapp.com/gxmes.html";
win.document.body.appendChild(iframe)
location.replace("https://google.com/")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
