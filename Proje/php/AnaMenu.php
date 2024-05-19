<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: AnaMenu.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ana Menü</title>
    <style>
    body {
        font-family: 'Josefin Sans', sans-serif;
        margin: 0;
        padding: 0;
        background-image: url(../gorseller/arkaplanWeb.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    .content {
        position: absolute;
        top: 50%;
        left: 8%;
        transform: translateY(-50%);
    }
    h1 {    
        color: white;
        margin: 20px 0px 20px;
        font-size: 75px;
    }
    h3 {
        color: white;
        font-size: 50px;
        margin-bottom: 50px;
    }
    .btn {
        display: inline-block;
        padding: 15px 30px;
        font-size: 20px;
        color: white;
        background-color: #6c757d;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        margin-top: 20px;
        transition: background-color 0.3s ease;
    }
    .btn:hover {
        background-color: #343a40;
    }
    </style>
</head>
<body>
    <div class="content">
        <h1><?php echo htmlspecialchars($_SESSION['username']); ?></h1>
        <h3>Merhaba, Sayfama hoş geldiniz</h3>
        <a href="../AnaMenu.html" class="btn">Ana Menüye Dön</a>
    </div>
</body>
</html>
