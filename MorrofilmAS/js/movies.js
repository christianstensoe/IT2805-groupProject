const movies = [
    {title: "The Exorcist: Believer", image: "", description: "En av tidenes mest ikoniske skrekkfilmer vender tilbake i ny drakt. For 50 år siden skremte William Friedkin hele verden med Exorcisten. Nå kommer en nytolkning og oppfølger fra David Gordon Green, regissøren som ga oss den nye Halloween-trilogien. I The Exorcist: Believer forsvinner 13-åringene Angela og Katherine. Tre dager etter man sist så sporet av dem, blir de funnet - men jentene aner ikke hva som har skjedd. Foreldrene forsøker desperat å komme til bunns i saken, samtidig utvikler Angela og Katherines oppførsel seg til det ugjenkjennelige og svært ubehagelige. Angelas far (Leslie Odom Jr.) kommer i kontakt med Chris MacNeil (Ellen Burstyn), som kjenner igjen adferden fra en tidligere hendelse som rammet hennes datter, Regan, for mange år siden...", genre: "Skrekk", age: "15 år"},
    {title: "Killers Of The Flower Moon", image: "Images/KOFM.png", description: "Kritikerrost krim-thriller fra Martin Scorsese, med Leonardo DiCaprio, Robert De Niro og Lily Gladstone i hovedrollene. På 1920-tallet blir flere medlemmer av Osage-urfolket i Oklahoma myrdet under mystiske omstendigheter. Alle ofrene har tilfeldigvis tilknytning til svært oljerike landeområder, som mange har sterk interesse for. Seriemordene trigger den første store FBI-etterforskningen under J. Edgar Hoovers ledelse. Killers of the Flower Moon hadde verdenspremiere under filmfestivalen i Cannes. Mesterregissør Martin Scorsese gjenforenes med Robert De Niro (Taxi Driver, Raging Bull, Goodfellas) for tiende gang, og med Leonardo DiCaprio (Gangs of New York, The Aviator, The Wolf of Wall Street) for sjette gang. Filmen er basert på David Granns bestselgende roman som tar for seg disse virkelige hendelsene. «Martin Scorsese presterer filmkunst på høyt nivå.» - NRK Filmpolitiet «Den blodige uretten begått overfor Osage-urfolket får her en storslagen og ambisiøs filmatisk skildring.» - Aftenposten", genre: "Drama", age: "15 år"},
    {title: "After Work", image: "Images/AW.png", description: "After Work er en tankevekkende film om fenomenet arbeid i det 21. århundre, filmet med skarp linse og en mild dose sarkasme. Regissør Erik Gandini er kjent for sine satiriske filmer som Videocracy og Swedish Theory of Love. Denne gangen tar han for seg vårt forhold til jobben. For hvem er vi egentlig, når jobben slutter å eksistere? After Work tar opp en samfunnsutvikling som bekymrer mange, og som påvirker langt flere. Majoriteten av dagens jobber vil forsvinne i løpet av noen få tiår. I takt med at teknologien overgår menneskelig kapasitet, bør vi samtidig tenke over hvilken rolle arbeid spiller i livene våre. Er vi klare for å møte et overskudd av tid? For en arbeidsledig tilværelse? Med en fortelling som springer over fire kontinenter, beskriver After Work vidt forskjellige skjebner, der noen knapt har et liv utenom jobb mens andre bader i fritid. I møtet med disse kastes vi inn i et eksistensielt spenningsfelt, mellom nåtid og fremtid.", genre: "Dokumentar", age: "Tillatt for alle"},
    {title: "Sulis 1907", image: "", description: "Året er 1907. Gruvebyen Sulis i Nordland var Nordens svar på Det ville vesten, og kobbergruvene i den arktiske fjellheimen var blant de største og mest nådeløse. Atten år gamle Konrad er desperat etter arbeid og får jobb i den livsfarlige gruven Hanken. Det er brutale kår for arbeiderne, og forholdene blir ikke bedre når den kyniske Olof Wenström kommer til makten i gruveselskapet. Det blusser opp til opprør og den sosialistiske aktivisten Helene Ugland maner til kamp. Kapitalisten Wenström har imidlertid andre planer. Midt i konflikten står unge Konrad. Sulis 1907 er inspirert av virkelige hendelser, og skildrer opptrappingen til opprøret som endret Norge. Det er et storslaget drama fra Nils Gaup (Veiviseren (1987), Kautokeino-opprøret (2008), Birkebeinerne (2016) mm.) med stjerneskuddet Otto Fahlgren og Simon J. Berger kjent fra Exit i hovedrollene. I andre ledende roller finner vi blant andre Stig Henrik Hoff, Alexandra Gjerpen og Rune Temte.", genre: "Action", age: "12 år"},
    {title: "Paw Patrol Superfilmen", image: "/Images/PP.png", description: "legg til", genre: "legg til", age: "legg til"},
    {title: "Lars Er LOL", image: "Images/LEL.png", description: "I det nye eventyret til suksesserien lander en magisk meteoritt i Adventure City, noe som gir Paw Patrol-valpene superkrefter, og transformerer dem til MIGHTY PUPS! De nye kreftene er en gavepakke, men situasjonen tar en dramatisk vending når erkefienden Humdinger bryter seg ut av fengsel for å stjele superkreftene deres.", genre: "Barnefilm", age: "Tillatt for alle"},
    {title: "Dumb Money", image: "Images/DM.png", description: "Dette er den ultimate David mot Goliat-fortellingen, basert på den utrolige historien om vanlige ungdommer som kuppet Wall Street og ble rike ved å gjøre GameStop (ja, videospillbutikken på kjøpesenteret) til verdens hotteste selskap. Midt i det hele, finner vi den helt vanlige fyren Keith Gill (Paul Dano), som starter alt ved å investere alle sparepengene sine i GameStop-aksjen og legger det ut i sosiale medier. Når innleggene hans går viralt og vokser ut av proporsjoner, skjer det samme med livet til Keith og alle som følger ham. Etter hvert som et aksjetips blir en bevegelse, blir alle rike, helt til milliardærene kjemper tilbake, og begge sider finner at deres verden er snudd på hodet. Filmen er basert på boken The Antisocial Network av Ben Mezrich.", genre: "Komedie", age: "6 år"},
    {title: "Five Nights At Freddys", image: "Images/FNAF.png", description: "Velkommen til nattskiftet fra helvete! Kan du overleve fem netter? Mike (Josh Hutcherson) tar en jobb som nattevakt på den nedlagte dineren Freddy Fazbear's Pizza. Allerede første natt erfarer han at det ikke vil bli så lett som antatt. Robotmaskotene som tilhører restauranten viser seg å være alt annet enn nedstøvede, gamle roboter ute av drift... Five Nights At Freddy's er basert på det populære pek-og-klikk-skrekkspillet fra 2014. Filmen produseres av Blumhouse, studioet som ga oss M3GAN, The Black Phone og The Invisible Man.", genre: "Skrekk", age: "15 år"},
];

const movieContainer = document.querySelector(".movie-container");
const popup = document.getElementById("moviePopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.querySelector(".close")

//kode til popup-boksen

function showPopup(movie){
    popupTitle.textContent = movie.title;
    popupText.textContent = movie.description;
    popup.style.display = "block";
}

function closePopupThing(){
    popup.style.display = "none"
}

//for å vise filmene på sida

function showMovies(){
    for (let i=0; i<movies.length; i++){
        let element = document.createElement("div");
        element.className = "movie";
        element.textContent = movies[i].title;
        element.addEventListener('click', function() {
            showPopup(movies[i]);
        });

        movieContainer.appendChild(element);
    }
}

closePopup.addEventListener('click', closePopupThing);

window.addEventListener('click', function(event){
    if (event.target == popup){
        closePopupThing;
    }
});

showMovies();
