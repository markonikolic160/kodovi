//dom elementi

let inputIme = document.getElementById("name");
let form = document.querySelector("form");
let pRes = document.getElementById("result");
let btnSubmit = document.querySelector("#submit")

form.addEventListener("submit",event => {
    event.preventDefault();
    //ispis ime prezime
    pRes.innerHTML = inputIme.value + "<br>";

    //ispis pola
    let radioButtonGender = document.querySelector("input[name='gender']:checked");
    switch(radioButtonGender.value){
        case "m": 
            pRes.innerHTML += `<span style="color: blue">Pol: muski </span>`;
            break;
        case "f":
            pRes.innerHTML += `<span style="color: red">Pol: zenski </span>`;
            break;
        case "o":
            pRes.innerHTML += `<span style="color: green">Pol: neopredeljen </span>`;
            break;
            default:
                pRes.innerHTML += "Greskaaaa";

    }
        //////ispis tehnologija
    let checkBoxTehChecked = document.querySelectorAll('input[name="tech"]:checked');
    pRes.innerHTML += `<br><ul>`;
    checkBoxTehChecked.forEach(elem =>{
        pRes.innerHTML += `<li>${elem.value}</li>`
    });
    pRes.innerHTML += `</ul>`;

    form.reset();
});

    /* ja pokusavao i ne radi sve
    let ime = inputIme.value;
    console.log(ime);
    let inputPol = document.querySelector("input[name='gender']:checked");
    let polCheck = inputPol.value;
    let inputTech = document.querySelectorAll("input[name='tech']:checked");
    let techCheck = inputTech.value;
    console.log(techCheck);
    pRes.innerHTML += `Ime i prezime: ${ime} <br>`;
    pRes.innerHTML += `Pol: ${polCheck}`;
    let upis = `<ul>`;
    inputTech.forEach(elem => {
        upis +=`<li>${elem}</li>`
    });
    upis += `</ul>`;
    pRes.innerHTML += upis;

    if(polCheck == "muski"){
        pRes.style.color = "blue";
    } else if(polCheck == "zenski"){
        pRes.style.color = "red";
    } else {
        pRes.style.color = "green";
    }
    form.reset();
    */
