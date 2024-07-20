//your JS code here. If required.
function capitalizeOnBlur() {
    const inputField = document.getElementById('fname');
	if (inputField) {
        inputField.addEventListener('blur', function() {
            // Convert the content to uppercase
            inputField.value = inputField.value.toUpperCase();
        });
    }
}
capitalizeOnBlur();
