// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the span element
    const yearSpan = document.getElementById('copyright-year');
    
    // Check if element exists
    if (yearSpan) {
        // Set the current year
        yearSpan.textContent = new Date().getFullYear();
    } else {
        console.error('Copyright year element not found!');
    }
});
