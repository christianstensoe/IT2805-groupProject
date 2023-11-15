/* Script for å generere felles HTML-kode */

document.getElementById("footer").innerHTML = '\
    <div class="bottom center"> \
        <div> Kontakt: kontakt@morrofilm.no </div> \
        <div> Tlf: 123 45 678 </div> \
        <div> Adresse: Filmveien 123, 7030 Trondheim</div> \
    </div>';


document.getElementById("header").innerHTML = '\
    <div class="topbox center"> \
        <div id="index"> \
            <a href="index.html" class="whitelink"> Morrofilm AS </a> \
        </div> \
        <div id="movies"> \
            <a href="movies.html" class="whitelink"> Filmer </a> \
        </div> \
        <div id="booking"> \
            <a href="booking.html" class="whitelink"> Booking </a> \
        </div> \
        <div id="about"> \
            <a href="about.html" class="whitelink"> Om oss </a> \
        </div> \
    </div> ';

/* Koden nedenfor legger til denne klassen til denne classen slik at den får en annen farge i CSS */

const current_page = location.href.split("/").slice(-1)[0].split(".")[0];

document.getElementById(current_page).firstElementChild.classList.add("current_page");

