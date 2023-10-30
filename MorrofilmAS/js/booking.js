document.addEventListener('DOMContentLoaded', function() {
    const movieBox = document.getElementById('movieBox');
    const movieModal = document.getElementById('movieModal');
    const closeModal = document.getElementById('closeModal');

    // Show the modal when movie box is clicked
    movieBox.addEventListener('click', function() {
        movieModal.style.display = 'block';
    });

    // Hide the modal when close button is clicked
    closeModal.addEventListener('click', function() {
        movieModal.style.display = 'none';
    });

    // Hide the modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == movieModal) {
            movieModal.style.display = 'none';
        }
    });
});
