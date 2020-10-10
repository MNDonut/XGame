<?php
  $to = "mazahaka1982@gmail.com";
  $message = $_POST['message'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  mail ($to, "Повідомлення з сайту від ".$name." <$email>", $message, "Content-type: text/html; charset=utf-8");
  mail ($email, "XGame Project", "Хочемо вам повідомити, що ваше повідомлення було відправлено та буде розглянуте протягом двох днів. Спасибі за вашу активність :)", "Content-type: text/html; charset=utf-8");
  header("Location: https://projectxgame.000webhostapp.com/");
  exit;
?>
