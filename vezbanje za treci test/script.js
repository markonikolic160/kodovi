// if grananje zadatci
// prezentacija 
// 1. zadatak
let x = 9 ;
let y = 25 ;
if(x<y){
    console.log("Manji je " + x);
}else {
    console.log("Manji je " + y);
}

//3.
let pol = "m" ;
let divPol = document.getElementById("pol");
if(pol == "m"){
    divPol.innerHTML = `<img src="dicaprio.jpg" style="width: 150px;">`;
} else {
    divPol.innerHTML = `<img src="brielarson.jpg" style="width: 150px;">`;
}

//4.
let vreme = new Date().getHours();
if(vreme<12){
    console.log("jutro je ");
} else {
    console.log("popodne je ");
}
//5.
let godina = new Date().getUTCFullYear();
let starost = 1987;
if(godina - starost <18){
    console.log("maloletna osoba");
} else {
    console.log("punoletna osoba ");
}
//6.
let prvi = 141 ;
let drugi = 81 ;
let treci = 36 ;
let najveci = prvi ;
if(najveci<drugi){
    najveci = drugi;
}else if(najveci<treci){
    najveci = treci;
}
console.log(najveci);

// zadatak radno vreme butika radni dan  vikend
let dan = new Date().getDay()
//dan = 0 ;
//vreme = 7;
if(dan>0 && dan<6){
    if (vreme>=9 && vreme<20){
        console.log("Radni dan i prodavnica je otorena.")
    } else {
        console.log("Radni dan i prodavnica je zatvorena.")
    }
}else{
    if(vreme>=10 && vreme<18){
        console.log("Vikend i prodavnica je otvorena.")
    }else{
        console.log("Vikend i prodavnica je zatvorena.")
    }
}

// switch grananje

//8.zadatak na osnovu unete boje menja se boja teksta nenkog paragrafa

let paragrafBoja = document.getElementById("boja");
let boja = "red";

switch(boja){
    case "red" :
        paragrafBoja.style.color = "red";
        break;
    case "blue" :
        paragrafBoja.style.color = "blue";
        break;
    case "green" :
        paragrafBoja.style.color = "green";
        break;
    default:
        paragrafBoja.style.color = "yellow";
    
}

// zadatak sa sleka za kupovine i popust i davalac krvi 
let cena = 1000 ;
let davalac = "";
let brojKupovina = 32 ;

if(brojKupovina>=40){
    cena = cena - cena * 0.4 ;
} else if(davalac=="da"){
    cena = cena - cena * 0.3;
} else if(brojKupovina>=20){
    cena = cena - cena * 0.2;
}else if (brojKupovina>=10){
    cena = cena - cena *0.1;
} else {
    cena = cena ;
}
console.log("potrebno je platiti : " + cena + " dinara.");

// while petlja

i = 1 ; 
let ispisBrojeva= "";
while(i<=20){
    ispisBrojeva += i+" ";
    i++;
}
console.log(ispisBrojeva);

n = 1 ;
m = 5 ;
let proizvod = 1 ;
while(n<=m){
    proizvod *= n;
    n++
}
console.log(proizvod);

// sa koliko brojeva je deljiv neki uneti broj k

let k = 12 ;
i = 1 ;
let brojDelioca = 0;
while(i<=k){
    if(k%i == 0){
        brojDelioca++
    }
    i++;
}
console.log(brojDelioca);

// kreirati paragrafe i obojiti im tekst sa tri razlicite boje

let brPar = 9 ;
i = 1 ;
let tekstPar = "Ovo je tekst paragrafa za promenu boje";
let div17 = document.getElementById("zadatak17");
while(i<=brPar){
    if(i%3 == 1){
        div17.innerHTML += `<p style="color:red">${tekstPar}</p>`;
    }else if(i%2 == 0){
            div17.innerHTML += `<p style="color:blue">${tekstPar}</p>`;
    }else {
        div17.innerHTML += `<p style="color:green">${tekstPar}</p>`;
    }
    i++;
}

// boji tekst paragrafa

function obojiParagraf(nekaboja){
    let parBoja = document.getElementById("jedan");
    return parBoja.style.color = `${nekaboja}`;
}
obojiParagraf("green");

function font(brojFonta){
    let parFont = document.getElementById("font");
    return parFont.style.fontSize = `${brojFonta}` +"px";
}
font("50");

//recenica 5 razlicita fonta
function recenice(tekstRecenice){
    let divRecen = document.getElementById("recenica");
    for(i=10 ; i <= 30 ; i+=5){
        divRecen.innerHTML += `<p style="font-size:${i}px">${tekstRecenice}</p>`
    }
}
recenice("neka recenica za ispisivanje");