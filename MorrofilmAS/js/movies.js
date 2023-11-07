function showMovieInfo(title, description, image) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalImage").innerHTML = '<img src="' + image + '" alt="Movie Image">';
    document.getElementById("movieModal").style.display = "block";

}

function hideMovieInfo() {
    document.getElementById("movieModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("movieModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
