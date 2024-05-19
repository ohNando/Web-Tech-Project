<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Email ve şifre doğrulama
    if (preg_match('/^b[0-9]{9}@sakarya\.edu\.tr$/', $email)) {
        $user_part = substr($email, 0, 10);
        if ($password === $user_part) {
            $_SESSION['username'] = $user_part;
            header("Location: AnaMenu.php");
            exit();
        } else {
            echo "Şifre hatalı!";
        }
    } else {
        echo "Geçersiz e-posta adresi!";
    }
}
?>
