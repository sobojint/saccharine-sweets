/* Mobile navigation overlay when mobile navbar button clicked */
function toggleOverlay() {
    /* Toggle scrolling */
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';

    /* Toggle overlay */
    document.getElementById('m-overlay').classList.toggle('active');
}