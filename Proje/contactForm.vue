<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="AnaMenu.html">ohNando</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="Hakkimda.html">Hakkımda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Ozgecmis.html">Özgeçmiş</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Sehrim.html">Şehrim</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Miras.html">Mirasımız</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Iletisim.html">İletişim Sayfası</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Ulas.html">Bana Ulaşın</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="Login.html">Giriş Yap</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <h2>İletişim Formu</h2>
      <form @submit.prevent="submitForm">
        <label for="name">İsim :</label>
        <input type="text" v-model="form.name" id="name" />

        <label for="surname">Soyisim :</label>
        <input type="text" v-model="form.surname" id="surname" />

        <label for="email">Email Adresiniz :</label>
        <input type="email" v-model="form.email" id="email" />

        <label for="subject">Iletişim Sebebiniz :</label>
        <select v-model="form.subject" id="subject">
          <option value="destek">Destek</option>
          <option value="teklif">Tebrik</option>
          <option value="soru">Merak</option>
          <option value="diğer">Diğer</option>
        </select>

        <label for="message">Mesaj :</label>
        <textarea v-model="form.message" id="message" rows="4"></textarea>

        <label for="file">Dosya Yüklemek isterseniz :</label>
        <input type="file" @change="handleFileUpload" id="file" />

        <label for="Fav-SoftLang">Favori Yazılım Diliniz : (İsteğe Bağlı)</label>
        <div id="Fav-SoftLang">
          <input type="radio" v-model="form.favSoftLang" value="C" /> C
          <input type="radio" v-model="form.favSoftLang" value="C++" /> C++
          <input type="radio" v-model="form.favSoftLang" value="C#" /> C#
          <input type="radio" v-model="form.favSoftLang" value="JavaScript" /> JavaScript
          <input type="radio" v-model="form.favSoftLang" value="Python" /> Python
        </div>

        <label>
          <input type="checkbox" v-model="form.agree" />
          <a href="https://www.youtube.com/watch?v=SegaPbTyFrQ">Veri politikasını</a> kabul ediyorum.
        </label>

        <button type="submit">Gönder</button>
        <button type="button" @click="resetForm">Temizle</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        subject: 'destek',
        message: '',
        file: null,
        favSoftLang: '',
        agree: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Form verilerini işleme kodları burada olacak
      console.log(this.form);
    },
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
    },
    resetForm() {
      this.form = {
        name: '',
        surname: '',
        email: '',
        subject: 'destek',
        message: '',
        file: null,
        favSoftLang: '',
        agree: false,
      };
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-image: url(../gorseller/IletisimArkaPlan.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: white;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 3px rgb(255, 255, 255) solid;
}

.navbar .navbar-nav .nav-link {
  color: rgb(255, 255, 255);
  font: bold;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.container form {
  margin-top: 20px;
}

.container label {
  display: block;
  margin-bottom: 5px;
}

.container input[type="text"],
.container input[type="email"],
.container textarea,
.container select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.container textarea {
  resize: vertical;
}

.container button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.container button:hover {
  background-color: #45a049;
}

.container input[type="file"] {
  margin-top: 5px;
}

.container label input[type="checkbox"] {
  margin-left: 5px;
}
</style>
