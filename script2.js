function display() {
    var inputName2 = document.getElementById("username2");
    var inputPassword2 = document.getElementById("password2");

    inputName2.innerHTML = "Username is " + localStorage.getItem("sName");
    inputPassword2.innerHTML = "Password is " + localStorage.getItem("sPass");
}

