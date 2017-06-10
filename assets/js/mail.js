$(document).ready(function(){
	$("#send-mail").submit(function(){
		$.ajax({
			type: "POST",
			url: "assets/mail.php",
			data: $(this).serialize()
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#text").val("");
			alert("Спасибо! Ваше письмо успешно отправлено.");
		});
		return false;
	});
});