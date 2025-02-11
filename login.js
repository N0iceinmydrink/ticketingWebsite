document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    let usernameInput = document.getElementById('username');
    let errorText = document.getElementById('errorText');
    
    // Regular expression to check for special characters
    let regex = /[^A-Za-z0-9]/;

    // Check if special characters are used
    if (regex.test(usernameInput.value)) {
        // Show error message
        errorText.style.display = 'block';
        usernameInput.style.color = 'red';
        usernameInput.style.borderColor = "red"; // Change text color to red
    } else {
        // Hide error message and reset text color
        errorText.style.display = 'none';
        usernameInput.style.color = 'black';
    }
});
