// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Initially show the home section when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Optional: Handle form submission
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Pesan berhasil dikirim!");
});
