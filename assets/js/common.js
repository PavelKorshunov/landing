$(window).load(function(){
	$(".load").fadeOut();
	$(".load-page").delay(400).fadeOut("slow");
});

$(document).ready(function(){

	//parallax effect

	$(".parallax").parallaxInit();

	//scroll navigation

	$('a[href^="#"]').bind('click', function (e) {
	 e.preventDefault();
	 
	var target = this.hash,
	 $target = $(target);
	 
	$("html, body").stop().animate({
	 'scrollTop': $target.offset().top
	 }, 800);
	$(".mobile_nav").fadeOut(400);
 	});

	//boxloader effects

	$(".right-bxl").boxLoader({
		direction:"x",
		position: "-50%",
		effect: "fadeIn",
		duration: "1s",
		windowarea: "80%"
	});
	$(".left-bxl").boxLoader({
		direction:"x",
		position: "50%",
		effect: "fadeIn",
		duration: "1s",
		windowarea: "80%"
	});
	$(".top-bxl").boxLoader({
		direction:"y",
		position: "100%",
		effect: "fadeIn",
		duration: "1s",
		windowarea: "60%"
	});

	
});

// show my works

var workShow = {
	call: function() {
		workShow.showHiddenBlock();
		workShow.closeBlock();
	},
	showHiddenBlock: function() {
		var domLink = $(".work_description").find("a");
		domLink.click(function() {
			var link = this.attributes["data-block"].value;
			var hiddenBlock = document.getElementById(link);
			if(hiddenBlock.style.display !== "block") {
				hiddenBlock.style.display = "block";
			} else {
				hiddenBlock.style.display = "none";
			}
		});
	},
	closeBlock: function() {
		var close = $(".hidden_work").find("span");
		close.click(function() {
			$(".hidden_work").css({"display" : "none"});
		});
	}
};
$(document).ready(workShow.call);
