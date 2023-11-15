function selectPerson(ID){ //definerer funksjonen selectPerson som tar inn argumentet ID
    console.log(ID) 
    let go = document.querySelectorAll(".personObject") //deklarerer en variabel som er alle elementene i classen personObject
    for (let i = 0; i < go.length; i++){ //så lenge i er mindre enn lengden av go (altså lavere verdi enn antall elementer i classen) øker i med 1
        console.log(go[i]) //printer her ut alle elementene i personObject
        if (go[i].id != ID){ //dersom elementets ID er ulik fra IDen som ble trykket på får de classen hidden, som skjuler elementet
            go[i].classList.add("hidden")
        } else{                         //ellers får de classen active som viser elementet og beskrivelsen
            go[i].classList.add("active")
        }
    }
}

document.querySelectorAll('button').forEach(function(button){ //henter her ut alle buttons og for hver enkelt button skal den høre etter 'click'. 
    button.addEventListener('click', function(event){ //Når 'click' er hørt kjører funksjonen getOut()
        getOut(button.id,event);
    })
})

function getOut(ID,event) {
    if(event){event.stopImmediatePropagation()//sjekker her om dersom det er 'click', og hvis eventet er et klikk hindrer den andre eventlisteners (som hører etter 'click') fra å kalles
    }
    let out = ID.replace('button', ''); //lager en variabel som erstatter "button" med en tom streng, slik at knappens ID = section ID 
    let allElements = document.querySelectorAll('.personObject'); // lager her en variabel som inneholder alle elementene i classen personObject

    allElements.forEach(function(element) {
        if (element.id == out) { //sjekker om elementets ID tilsvarer knappens ID
            element.classList.remove('active');//dersom elementets ID tilsvarer ID-en til knappen skal den fjerne classen 'active'
        } else {
            element.classList.remove('hidden');// ellers skal den fjerne classen 'hidden'
        }
    });
}