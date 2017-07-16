function validatePhone(input) {
	if (input.value.length < 10) {
		input.setCustomValidity("You need to put a valid phone number including area code.");
	}
	else {
		input.setCustomValidity("");
	}
}
function validateAddress(input) {
	if (input.value.length < 5) {
		input.setCustomValidity("You need to put a valid address.");
	}
	else {
		input.setCustomValidity("");
	}
}