<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gönderilen Bilgiler</title>
    <style>
        body {
            background-image: url('../gorseller/phpArkaPlan.jpeg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size:cover;
            color: #fff; /* Beyaz renk */
        }

        table {
            border-collapse: collapse;
            width: 100%;
            color: #fff; /* Beyaz renk */
        }

        h2 {
            text-align: center;
        }

        th, td {
            border: 1px solid #444; /* Koyu gri çizgi */
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #333; /* Koyu gri */
        }
    </style>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
        $favSoftLang = isset($_POST["Fav-SoftLang"]) ? $_POST["Fav-SoftLang"] : "Bilinmiyor";
        $agree = isset($_POST["agree"]) ? "Kabul edildi" : "Kabul edilmedi";
    ?>
    <h2>Gönderilen Bilgiler</h2>
    <table>
        <tr>
            <th>Alan</th>
            <th>Değer</th>
        </tr>
        <tr>
            <td>İsim</td>
            <td><?php echo $name; ?></td>
        </tr>
        <tr>
            <td>Soyisim</td>
            <td><?php echo $surname; ?></td>
        </tr>
        <tr>
            <td>Email</td>
            <td><?php echo $email; ?></td>
        </tr>
        <tr>
            <td>Telefon</td>
            <td><?php echo $phone; ?></td>
        </tr>
        <tr>
            <td>İletişim Sebebi</td>
            <td><?php echo $subject; ?></td>
        </tr>
        <tr>
            <td>Mesaj</td>
            <td><?php echo $message; ?></td>
        </tr>
        <tr>
            <td>Favori Yazılım Dili</td>
            <td><?php echo $favSoftLang; ?></td>
        </tr>
        <tr>
            <td>Veri politikası kabul edildi mi?</td>
            <td><?php echo $agree; ?></td>
        </tr>
    </table>
    <?php } ?>
</body>
</html>
