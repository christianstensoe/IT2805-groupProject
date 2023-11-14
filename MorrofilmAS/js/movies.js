//funksjon som bare viser filmene på siden
function showMovieInfo(title, description, image) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalImage").innerHTML = '<img src="' + image + '" alt="Movie Image">';
    document.getElementById("movieModal").style.display = "block";

}

//funksjon som lukker modalboksen når du krysser den ut
function hideMovieInfo() {
    document.getElementById("movieModal").style.display = "none";
}

//funksjon som får modalboksen til å dukke opp når du trykker på en film
window.onclick = function(event) {
    var modal = document.getElementById("movieModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/* Funksjon som sender deg til booking-siden */
const button = document.getElementById("booking_button")
button.addEventListener("click", goToBooking )

function goToBooking(event){
    location.href = "../pages/booking.html";
}
