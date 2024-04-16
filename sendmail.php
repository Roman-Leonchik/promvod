<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "phpmailer/src/Exception.php";
    require "phpmailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->setLanguage("ru", "phpmailer/language/");
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setForm("test@mail.com", "Тестовое имя");
    //Кому отправить
    $mail->addAddress("roman.leon4ik@yandex.ru");
    //Tema письма
    $mail->Subject = "Привет! Это тестовое письмо"

    //Тело письма
    $body = "<h1>Супер пиьмо</h1>"

    if(trim(!empty($_POST["name"]))){
        $body.="<p><strong>ИмяЖ</strong> ".$_POST["name"]"</p>";
    }

    if(trim(!empty($_POST["number"]))){
        $body.="<p><strong>ИмяЖ</strong> ".$_POST["number"]"</p>";
    }

    if(trim(!empty($_POST["question"]))){
        $body.="<p><strong>ИмяЖ</strong> ".$_POST["question"]"</p>";
    }

    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = "Ошибка";
    } else {
        $message = "Данные отправлены!";
    }

    $response = ["message" => $message];

    header("Content-type: application/json");
    echo json_encode($response);

?>