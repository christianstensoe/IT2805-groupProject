function selectPerson(ID){
    console.log(ID)
    let go = document.querySelectorAll(".personObject")
    for (let i = 0; i < go.length; i++){
        console.log(go[i])
        if (go[i].id != ID){
            go[i].classList.add("hidden")
        } else{
            go[i].classList.add("active")
        }
    }
}

document.querySelectorAll('button').forEach(function(button){
    button.addEventListener('click', function(event){
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