document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitJsButton = document.querySelector("button[type='submit']:nth-of-type(1)");

    submitJsButton.addEventListener("click", function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const agree = document.querySelector("input[name='agree']").checked;

        let errors = [];

        if (!name) errors.push("İsim gerekli.");
        if (!surname) errors.push("Soyisim gerekli.");
        if (!email) errors.push("Email gerekli.");
        if (!validateEmail(email)) errors.push("Geçerli bir email adresi girin.");
        if (!subject) errors.push("İletişim sebebi gerekli.");
        if (!message) errors.push("Mesaj gerekli.");
        if (!agree) errors.push("Veri politikasını kabul etmelisiniz.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Form başarıyla gönderildi!");
            form.submit();
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
