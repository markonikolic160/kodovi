console.log("to do list");

let inputObaveza = document.getElementById("unesi");

let sviListElementi = document.querySelectorAll("li");
let lista = document.querySelector("ul");
//let upisGoreDole = document.querySelector('input[name="dodaj"]:checked');
let addTaskBegin = document.getElementById("dodajNaPocetak");
let addTaskEnd = document.getElementById("dodajNaKraj");
let arrTasks = [];

if(JSON.parse(localStorage.getItem("arrTasksStorage"))== null){
    localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks) );
}else{
    arrTasks = JSON.parse(localStorage.getItem("arrTasksStorage"));
    for(let i = 0 ; i<arrTasks.length ; i++){
        let liOldTask = document.createElement("li");
        liOldTask.textContent = arrTasks[i];
        lista.appendChild(liOldTask);
    }
}



inputObaveza.addEventListener('keyup',event=>{
    if(event.keyCode == 13){//ako je kliknut enter
    let inputTaskText = inputObaveza.value;
    if(inputTaskText=="" || inputTaskText == null){
        alert("morate uneti tekst zadatka");
    } else{
        let liNewTask = document.createElement('li');
        liNewTask.textContent = inputTaskText;
        //arrTasks.unshift(inputTaskText);
        
        let radioAdd = document.querySelector("input[name=dodaj]:checked");
        if(radioAdd.id == "dodajNaPocetak"){
            lista.prepend(liNewTask);
            arrTasks.unshift(inputTaskText);
        }else{
            lista.appendChild(liNewTask);
            arrTasks.push(inputTaskText);
        }
        localStorage.setItem("arrTasksStorage",JSON.stringify(arrTasks));
    }
    inputObaveza.value = "";
    }
});

lista.addEventListener('click',event =>{
    console.log("kliknuto na UL");
    if(event.target.tagName == "LI"){
        console.log("kliknuto na LI")
        event.target.remove();
        //arrTasks.pop(event.target.textContent);
        let index = arrTasks.indexOf(event.target.textContent);
        arrTasks.splice(index,1);
        localStorage.setItem("arrTasksStorage",JSON.stringify(arrTasks));
    }
});
document.querySelector("div").addEventListener('click',event=>{
    console.log("kliknuto na DIV");
});
document.querySelector("body").addEventListener('click',event=>{
    console.log("kliknuto na BODY");
});

//////////////////////////////////////////////////
// local storage
/////////////////////////////////////////////////

let h = document.querySelector("h1");
// smestanje elementa u local storage
//localStorage.setItem( key , value );

localStorage.setItem("username","jelena");
localStorage.setItem("grad","nis");
//ukoliko kljuc vec postoji u storage onda ga apdejtuje
localStorage.setItem("username","stefan");
localStorage.setItem("godine",25);

//vracanje elementa iz local storage prema kljucu
let getUserName = localStorage.getItem("username");
console.log(getUserName);
let getGodine = localStorage.getItem("godine");
getGodine++;
localStorage.setItem("godine",getGodine);
console.log(getGodine);






/*
buttonDodaj.addEventListener('click',()=>{
    let elemListe = document.createElement("li");
    if(inputObaveza.value != ""){
        elemListe.textContent = inputObaveza.value;
        inputObaveza.value = "";
        switch(upisGoreDole.id){
            case "dodajNaPocetak":

                  break;
            case "dodajNaKraj":
                lista.appendChild(elemListe);
        }
        
    } else {
        alert("Unesite neku obavezu");
    }
});
*/