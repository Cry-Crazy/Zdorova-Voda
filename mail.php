<?php

$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
$adres = $_POST['adres'];
$note = $_POST['note'];
$number = $_POST['numner'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$adres = htmlspecialchars($adres);
$note = htmlspecialchars($note);
$number = htmlspecialchars($number);

$name = urldecode($name);
$tel = urldecode($tel)
$adres = urldecode($adres);
$note = urldecode($note)
$number = urldecode($number);


$name = trim($name);
$tel = trim($tel);
$adres = trim($adres);
$note = trim($note);
$number = trim($number);


mail(
    "pashahorolskij4@gmail.com", "Заявка с сайта", "name:".$name.". phoneNumber: ".$tel. $adres $note $number ,"From: example2@mail.ru \r\n"
);
if (mail( "pashahorolskij4@gmail.com", "Заявка с сайта", "name:".$name.". phoneNumber: ".$tel. $adres $note $number ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}


?>