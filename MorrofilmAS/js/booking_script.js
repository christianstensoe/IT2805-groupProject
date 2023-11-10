

const bookingForm = document.forms["bookingForm"];

/* 
Funksjon som sjekker diverse ting rundt form som man bestiller billett gjennom. 
Gir alert() og returnerer false dersom det er noe som er feil, ellers returnerer den true.
 */
function ticketValid(){

    const currentTime = new Date().getTime();

    /* timeBooked gir klokkeslett som filmen begynner */
    const timeBooked = Number(String(bookingForm["time"].value).slice(0,2));

    const timeDeadline = new Date(bookingForm["date"].value).getTime() + (timeBooked - 2)*3600*1000; /* Trekker fra 1 time ekstra for å gjøre om fra CET til UTC */

    const ticketDate_24 = new Date(bookingForm["date"].value).getTime() + 23*3600*1000; /* Tidspunkt 24 timer etter datovalg (i UTC) */

    if (timeDeadline < currentTime && currentTime < ticketDate_24) {
        alert("Du må bestille billett før klokken " + (timeBooked - 1) + " når du bestiller billett til kino som begynner klokken " + timeBooked);
        return false;

    } else if (ticketDate_24 < currentTime) {
        alert("Dato kan ikke være tilbake i tid");
        return false;
    }

    /* Legges inn sjekk for e-postadresse? */


    /* Sjekker billettyper */
    const sumStringOfTickets = bookingForm["number_adult_ticket"].value + bookingForm["number_student_ticket"].value + bookingForm["number_old_ticket"].value + bookingForm["number_child_ticket"].value;
    if(sumStringOfTickets == "0000"){
        alert("Du må bestille minst en billett")
        return false;
    }
    if(String(sumStringOfTickets).startsWith("000")){
        alert("Du kan ikke kun bestille barnebilletter for seg selv.")
        return false;
    }

    return true;
}



/* 
Funksjon som blir kallet når bruker trykker submit. Gir tilbakemelding til bruker, og hindrer refreshing av siden.
 */
function bookingConfirmation(event){

    if(ticketValid()){
        document.getElementById("booking_confirmation").innerText = "Vellykket. Takk for bestillingen!";

        event.preventDefault();

    } else {
        document.getElementById("booking_confirmation").innerText = 
        "Det oppstod en feil ved bestilling. Prøv igjen, eller kontakt oss på kontakt@morrofilm.no";

        event.preventDefault();
    }
}



/* 
Funksjon som oppdaterer feltene "totalpris" og "antall billetter" når bruker endrer antall billetter.
 */
function updateBooking(){

    const totalPrice = document.getElementById("totalPrice");
    const numberOfTickets = document.getElementById("numberOfTickets");

    let adultTicket = bookingForm["number_adult_ticket"].value;
    let studentTicket = bookingForm["number_student_ticket"].value;
    let oldTicket = bookingForm["number_old_ticket"].value;
    let childTicket = bookingForm["number_child_ticket"].value;
    /* Tickets for children are free */

    let sumOfTickets = 0;
    const sumStringOfTickets = adultTicket + studentTicket + oldTicket + childTicket;
    
    for (let i = 0; i < sumStringOfTickets.length; i++) {
        sumOfTickets += Number(sumStringOfTickets[i]);
    }

    const newPrice = adultTicket*200 + studentTicket*100 + oldTicket*150;

    totalPrice.innerHTML = "Totalpris: " + newPrice + " kr";
    numberOfTickets.innerHTML = "Antall billetter: " + sumOfTickets + " stk";
    
}


function changeMovie(){
    const imgSrc = bookingForm["movie"].value;
    document.getElementById("movie_booking_container").firstElementChild.src = "../img/movies/" + imgSrc + ".png";
}