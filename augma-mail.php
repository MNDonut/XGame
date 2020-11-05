<?php
  $to = "mazahaka1982@gmail.com";
  $message = $_POST['contacts-message'];
  $name = $_POST['contacts-name'];
  $email = $_POST['contacts-email'];
  $price = $_POST['price'];
  mail ($to, "Повідомлення з сайту від ".$name." <$email>", $message."<br /> Замовили тариф: ".$price , "Content-type: text/html; charset=utf-8");
  header("Location: https://projectxgame.000webhostapp.com/augma.html");
  exit;
?>