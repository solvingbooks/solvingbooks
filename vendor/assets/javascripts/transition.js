
$(function(){
	var image = $('#spotlight'), i =1;
	function refresh () {
		i++;
		if (i > 6) i = 1;
		image.fadeOut(1000, function () {
			image.css("background", "url('assets/f" + i + ".jpg') no-repeat center center");
			image.fadeIn(1500);
		});
	}
	setInterval(refresh, 10000);
});