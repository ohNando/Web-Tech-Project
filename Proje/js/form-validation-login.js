function validateFormLogin() {
    var form = document.forms["loginForm"];
    var email = form["email"].value.trim();
    var password = form["password"].value.trim();

    if (email === "" || password === "") {
        window.alert('Lütfen eksik yer bırakmayınız!');
        return false;
    }

    var emailDuzen = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailDuzen.test(email)) {
        window.alert("Geçersiz e-mail");
        return false;
    }

    return true;
}