
function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	return regex.test(email);
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