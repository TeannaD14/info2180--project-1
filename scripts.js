/* Add your JavaScript to this file */
 document.addEventListener('DOMContentLoaded', function() {
    const newsletform = document.querySelector('.newsletter form');
    const emailin = document.getElementById('email');
    const mess = document.querySelector('.newsletter .message');

    newsletform.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailin.value.trim();

        if (email === '') {
            mess.textContent = "Please enter a valid email address.";
        } else {
            mess.textContent = `Thank you! Your email "${email}" has been added to our  mailing list!`;
            emailin.value = '';
        }
    });
});

