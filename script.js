let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let pswd = document.querySelector("#pswd").value;
    let confpswd = document.querySelector("#confpswd").value;
    if(pswd != confpswd) {
        document.querySelector("#pswd").setCustomValidity("Invalid");
        document.querySelector("#confpswd").setCustomValidity("Invalid");
        document.querySelector("#errmsg").innerText = "* Passwords do not match";
    }
});