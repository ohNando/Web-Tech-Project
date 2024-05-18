function validateForm() {
    var form = document.forms["contactForm"];
    var firstName = form["name"].value.trim();
    var lastName = form["surname"].value.trim();
    var email = form["email"].value.trim();
    var phone = form["phone"].value.trim();
    var subject = form["subject"].value.trim();
    var message = form["message"].value.trim();
    var agree = form["agree"].checked;

    if (firstName === "" || lastName === "" || email === "" || phone === "" || subject === "seciniz" || message === "" || !agree) {
        window.alert('Lütfen eksik yer bırakmayınız!');
        return false;
    }

    var nameDuzen = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/;
    if (!nameDuzen.test(firstName) || !nameDuzen.test(lastName)) {
        window.alert('Ad-Soyad alanında yalnızca harf olmalıdır');
        return false;
    }

    var emailDuzen = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailDuzen.test(email)) {
        window.alert("Geçersiz e-mail");
        return false;
    }

    var phoneDuzen = /^(\+?90|0)?\s*5\d{2}\s*\d{3}\s*\d{2}\s*\d{2}$/;
    if (!phoneDuzen.test(phone)) {
        window.alert("Geçersiz telefon numarası");
        return false;
    }

    return true;
}
