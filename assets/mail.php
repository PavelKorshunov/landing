<?php
	$recipient = "korsun4@mail.ru";
	$sitename = "pkopen.ru";

	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$text = trim($_POST["text"]);

	$pagetitle = "Письмо с моего сайта $sitename";
	$send_mail = "Имя: $name\nE-mail: $email\nТекст сообщения: $text";
	mail($recipient, $pagetitle, $send_mail);
?>