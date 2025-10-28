    // JavaScript code for form validation
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      	// Prevent form from submitting
        event.preventDefault();
        // Retrieve the input field value
        const inputValue = inputField.value;
         // Regular expression pattern for alphanumeric input
         const alphanumericPattern = /^[a-zA-Z0-9]+$/;
         // Check if the input value matches the pattern
         if (alphanumericPattern.test(inputValue)) {
          // Valid input: display confirmation and submit the form
          messageElement.textContent = 'Form submitted successfully!';
          inputField.value = '';

         } else {
             // Invalid input: display error message
             messageElement.textContent = 'Error: Please enter only alphanumeric characters.';

         }



    });



   