// Initialize EmailJS
(function() {
    emailjs.init('FLtAw4eSXjYUo51wN'); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formStatus = document.getElementById('form-status');
    formStatus.textContent = 'Sending...';

    emailjs.sendForm('service_id_test', 'template_0ixtwzh', this)
        .then(() => {
            formStatus.textContent = 'Message sent successfully!';
        },  (error) => {
            formStatus.textContent = 'Failed to send message. Please try again later.';
            console.error('Failed to send email:', error);
        });
});
