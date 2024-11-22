// Initialize EmailJS
const prependDollarSign = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.textContent = `$ ${element.textContent.trim()}`;
    });
};

// Apply to both <h3> and <p> elements
prependDollarSign('h3');

const hashSgin = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.textContent = `# ${element.textContent.trim()}`;
    });
};

// Apply to both <h3> and <p> elements
hashSgin('h4');

(function() {
    emailjs.init('FLtAw4eSXjYUo51wN'); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    const formStatus = document.getElementById('form-status');
    formStatus.textContent = 'Sending...';

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    emailjs.send('service_id_test', 'template_0ixtwzh', formData)
        .then(() => {
            formStatus.textContent = `Message sent successfully to ${formData.name} (${formData.email})!`;
        }, (error) => {
            formStatus.textContent = 'Failed to send message. Please try again later.';
            console.error('Failed to send email:', error);
        });
});
