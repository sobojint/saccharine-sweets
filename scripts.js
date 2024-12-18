/* Mobile navigation overlay when mobile navbar button clicked */
function toggleOverlay() {
    /* Toggle scrolling */
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';

    /* Toggle overlay */
    document.getElementById('m-overlay').classList.toggle('active');
}

// Check if there are any order buttons before attaching event listeners
const orderButtons = document.querySelectorAll('.order-btn');
if (orderButtons.length > 0) {
    orderButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior

            // Get the item name from the card title
            var itemName = this.closest('.gallery-card').querySelector('.gallery-card-title div').textContent;

            // Create and display the popup
            var popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerHTML = 'Order Sent for <p class="item-name">' + itemName + '</p>';

            // Append popup to body and show it
            document.body.appendChild(popup);
            popup.style.display = 'block';

            // Hide the popup after 2 seconds
            setTimeout(function() {
                popup.style.display = 'none';
                document.body.removeChild(popup);
            }, 2000);
        });
    });
}

// Check if there is a submit button before attaching the event listener
const submitButton = document.querySelector('.submit-btn');
if (submitButton) {
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the form from actually submitting

        // Create and display the popup
        var popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = 'Your message has been sent successfully!';

        // Append popup to body and show it
        document.body.appendChild(popup);
        popup.style.display = 'block';

        // Hide the popup after 2 seconds
        setTimeout(function() {
            popup.style.display = 'none';
            document.body.removeChild(popup);
        }, 2000);
    });
}
