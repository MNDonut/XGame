<?php
  $to = "mazahaka1982@gmail.com";
  $message = $_POST['message'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  mail ($to, "Повідомлення з сайту від ".$name." <$email>", $message, "Content-type: text/html; charset=utf-8");
?>
