let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let pswd = document.querySelector("#pswd");
    let confpswd = document.querySelector("#confpswd");
    if(pswd.value != confpswd.value) {
        pswd.setCustomValidity("Invalid");
        confpswd.setCustomValidity("Invalid");
        document.querySelector("#errmsg").innerText = "* Passwords do not match";
    }
    else {
        pswd.setCustomValidity("");
        confpswd.setCustomValidity("");
        document.querySelector("#errmsg").innerText = "";
    }
    pswd.reportValidity();
    confpswd.reportValidity();
});