
function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	return regex.test(email);
}

function isSpecialChar(userPassword) {
	var regex = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
	
	return regex.test(userPassword);
}

	$("#submitForm").click(function() {
		var errorMessage = "";
		var missingField = "";
		
		if($("#email").val() == "") {
			missingField += "Email ";
		}
		else if(isEmail($("#email").val()) == false) {
			errorMessage += "Please input a valid email address. "
		}
		
		if($("#phone").val() == "") {
			missingField += "Phone ";
		}
		else if($.isNumeric($("#phone").val()) == false || $("#phone").val().length != 10) {
		
			errorMessage += "Please input a valid phone number. "
		
		}
		
		if($("#password").val() == "") {
			missingField += "Password ";
		}
		else if($("#password").val() != $("#passwordConfirmation").val()) {
		
			errorMessage += "Your passwords do not match each other. "
		
		}
		else if($("#password").val().length < 8) {
			
			errorMessage += "Your password does not meet the minimum length of 8 characters. "
			
		}
		else if(isSpecialChar($("#password").val()) == false) {
			errorMessage += "Your password does not contain at least one special character. "
		}
		
		
		if($("#passwordConfirmation").val() == "") {
			missingField += "Password Confirmation ";
		}
		
		if(missingField != ""){
			errorMessage += "The following fields are not found: " + missingField + " ";
		}
		
		if(errorMessage != "") {
			
			$("#errorField").html(errorMessage);
			$("#errorField").fadeIn();
			
		}
		else {
			$("#errorField").fadeOut();
			$("#successField").fadeIn();
		}
	
	})