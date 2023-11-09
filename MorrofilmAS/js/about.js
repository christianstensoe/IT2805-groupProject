
function selectPerson(ID){
    console.log(ID)
    let go = document.querySelectorAll(".personObject")
    console.log(go)
    for (let i = 0; i < go.length; i++){
        console.log(go[i])
        if (go[i].id != ID){
            go[i].classList.add("hidden")
        } else{
            go[i].classList.add("active")
        }
    }
}
