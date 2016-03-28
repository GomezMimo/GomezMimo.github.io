$(document).ready(function(){	
	var signature_ = "";
	$('#firstname').on('keyup', function(){
		var value  = $('#firstname').val();				
		$('#firstname_text').text(" " + value);
	});
	$('#lastname').on('keyup', function(){
		var value  = $('#lastname').val();		
		$('#lastname_text').text(" " + value);				
	});
	$('#id').on('keyup', function(){
		var value  = $('#id').val();
		$('#id_text').text(" " + value);		
	});
	$('#country').on('keyup', function(){
		var value  = $('#country').val();
		$('#country_text').text(" " + value + "'s republic");		
	});

	$('#signature_button').on('click', function(){				
		var name = $('#firstname').val();
		var lastname = $('#lastname').val();
		$('#signature').text(name + " " + lastname);
	});
});