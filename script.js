// Direct approach - doesn't wait for DOMContentLoaded
// because script is at bottom of body
const yearSpan = document.getElementById('copyright-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
