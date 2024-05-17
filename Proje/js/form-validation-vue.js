document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: 'form',
        data: {
            name: '',
            surname: '',
            email: '',
            subject: '',
            message: '',
            agree: false,
            errors: []
        },
        methods: {
            validateForm() {
                this.errors = [];
                if (!this.name) this.errors.push("İsim gerekli.");
                if (!this.surname) this.errors.push("Soyisim gerekli.");
                if (!this.email) {
                    this.errors.push("Email gerekli.");
                } else if (!this.validateEmail(this.email)) {
                    this.errors.push("Geçerli bir email adresi girin.");
                }
                if (!this.subject) this.errors.push("İletişim sebebi gerekli.");
                if (!this.message) this.errors.push("Mesaj gerekli.");
                if (!this.agree) this.errors.push("Veri politikasını kabul etmelisiniz.");

                if (this.errors.length > 0) {
                    alert(this.errors.join("\n"));
                } else {
                    alert("Form başarıyla gönderildi!");
                    this.$el.submit();
                }
            },
            validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(String(email).toLowerCase());
            }
        }
    });

    const submitVueButton = document.querySelector("button[type='submit']:nth-of-type(2)");
    submitVueButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('form').__vue__.validateForm();
    });
});
