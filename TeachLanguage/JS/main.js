// Account Page Funtions
document.getElementById('openaccbtn').addEventListener('click', ()=>{
    document.getElementById('sign_in').style.display = "block";
    document.getElementById('login').style.display = "none";
    document.getElementById('exampleModalLabel').innerHTML = "Ro'yxatdan o'tish";
});
document.getElementById('return_form').addEventListener('click', ()=>{
    document.getElementById('sign_in').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('rating').style.display = "none";
    document.getElementById('exampleModalLabel').innerHTML = "";

});

// Mobile Navbar

$(document).ready(function() {
    $('#mob_nav1').on('click', function() {
        $('#hidden_ul').toggle("1000");
		$(this).css("border-bottom" , "2px solid white");
	})
});

$(document).ready(function() {
    $('#mob_nav2').on('click', function() {
        $('#hidden_ul2').toggle("1000");
		$(this).css("border-bottom" , "2px solid white");
	})
});
$(document).ready(function() {
    $('#mob_nav3').on('click', function() {
        $('#hidden_ul3').toggle("1000");
		$(this).css("border-bottom" , "2px solid white");
	})
});
$(document).ready(function() {
    $('#mob_nav4').on('click', function() {
        $('#hidden_ul4').toggle("1000");
		$(this).css("border-bottom" , "2px solid white");
	})
});
$(document).ready(function() {
    $('#mob_nav5').on('click', function() {
        $('#hidden_ul5').toggle("1000");
		$(this).css("border-bottom" , "2px solid white");
	})
});


$(document).ready(function() {
    $('#open_mob_nav').on('click', function() {
        $('#general_mob_nav').show("500");
	})
});
//mob_nav_close
$(document).ready(function() {
    $('#mob_nav_close').on('click', function() {
        $('#general_mob_nav').hide("500");
	})
});