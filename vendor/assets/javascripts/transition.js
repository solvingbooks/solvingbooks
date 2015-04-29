
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

$(document).ready(function() {
  $('#openModal form .button').click(function(){
        var Agregar = $('input[name=Usuario]').val();
        $('#navigation nav ul').append('<li><a class="nombreusuario" href="">' + Agregar+'</a></li>');
        $('#navigation nav ul li:nth-child(4)').addClass('quitarparausuario')
    });
})