// 2  zadatak

let ocena = 4 ;
switch(ocena){
    case 1: 
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan"); 
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4: case 5:
        console.log("Vrlo dobar ili odlican");  
        break;
    default:
        console.log("Ne znam za tu ocenu");          
}


// 7.zadatak 

let mesec = new Date().getMonth();
mesec = mesec + 1;
let godina = new Date().getFullYear();
switch(mesec){
    case 1:
        console.log("Mesec januar ima 31 dan");
        break;
    case 2:
        if((godina % 4 == 0 && godina % 100 !=0) || godina % 400 == 0){
        console.log("Mesec februar ima 29 dana");} 
        else {
            console.log("Mesec februar ima 28 dana")
        }
        break;
    case 3:
        console.log("Mesec mart ima 31 dan");
        break;
    case 4:
        console.log("Mesec april ima 30 dana");
        break;
    case 5: 
        console.log("Mesec maj ima 31 dan");
        break;
    case 6:
        console.log("Mesec jun ima 30 dana");
        break;
    case 7:
        console.log("Mesec jul ima 31 dan");
        break;
    case 8:
        console.log("Mesec avgust ima 31 dan");
        break;
    case 9:
        console.log("Mesec septembar ima 30 dana");
        break;
    case 10:
        console.log("Mesec oktobar ima 31 dan");
        break;
    case 11:
        console.log("Mesec novembar ima 30 dana");
        break;
    case 12:
        console.log("Mesec decembar ima 31 dan");
        break;

    default:
    console.log("Ne znam za taj mesec");  

}

// 8.zadatak 

let boja = "red" ;
let x;
switch(boja){
    case "red":
        x = document.getElementById("vezba");
        x.style.color = "red"
        break;
    case "green":
        x = document.getElementById("vezba");
        x.style.color = "green"
        break;
    case "blue":
        x = document.getElementById("vezba");
        x.style.color = "blue"
        break;
    default: 
        x = document.getElementById("vezba");
        x.style.color = "yellow"

}

// slack zadatak 

let cena = 1000;
let brojKupovina = 24;
let davalacKrvi = "da";
let racun;
if(brojKupovina>40){
    racun = cena - cena * 0.4
} else if (davalacKrvi == "da"){
    racun = cena - cena * 0.3
} else if (brojKupovina>20){
    racun = cena - cena * 0.2
} else if (brojKupovina>10){
    racun = cena - cena * 0.1
} else {
    racun = cena
}
console.log("Potrebno je platiti " + racun +  " dinara.");

// 5.zadatak 
let dan = new Date().getDay() ;

switch(dan){
    case 0: case 6:
        console.log("Sada je vikend");
        break;
    case 1:
        console.log("Ostalo je jos pet dana do vikenda");
        break;
    case 2:
        console.log("ostalo je jos cetiri dana do vikenda");
        break;
    case 3:
        console.log("Ostalo je jos tri dana do vikenda");
        break;
    case 4:
        console.log("Ostalo je jos dva dana do vikenda");
        break;
    case 5: 
        console.log("Sutra je vikend");
        break;
}
// 4. zadatak 
let broj1 = 17 ;
let broj2 = 23 ;
let karakter = "m";

switch(karakter){
    case "m":
        console.log(broj1*broj2);
        break;
    case "d":
        console.log(broj1/broj2);
        break;
    case "s":
        console.log(broj1+broj2);
        break;
    case "o":
        console.log(broj1-broj2);
        break;
}
// 4. zadatak na casu 
let br1 = 5 ;
let br2 = 0 ;
let op = "d";
let rez;
switch(op){
    case "s":
        rez = br1 + br2;
        console.log(`${br1} + ${br2} = ${rez}`);
        break;
    case "o":
        rez = br1 - br2;
        console.log(`${br1} - ${br2} = ${rez}`);
        break;
    case "m":
        rez = br1 * br2;
        console.log(`${br1} * ${br2} = ${rez}`);
        break;
    case "d":
        if(br2 == 0){
            console.log("Ne deli se nulom");
        } else {
            rez = br1 / br2;
        console.log(`${br1} / ${br2} = ${rez}`);  
        }
        break;
        
    default :
    console.log("Greska");

}

// 3. zadatak 

let paranBr = 8 ;

switch(paranBr){
    case 0:
        console.log("Broj je nula");
        break;
    case 2:
        console.log("Broj je dva");
        break;
    case 4:
        console.log("Broj je cetiri");
        break;
    case 6:
        console.log("Broj je sest");
        break;
    case 8:
        console.log("Broj je osam");
        break;
    default:
        console.log("Pogresan unos");
}

// slack zadatak Zajecar

let h = 19 ;
let m = 54 ;
let s = 47 ;
let k = 27 ;
let t = 5 ;
let brIzvodjaca = 5 ;


let pocetak = h * 3600 + m * 60 + s ;
let kSec = k * 60 ;
let tSec = t *60 ;
let kraj;
kraj = pocetak + kSec * brIzvodjaca + (brIzvodjaca - 1) * tSec ;
// sve iznad pretvoreno u sekunde 

// stackoverflow
let vremeK = new Date('28 Jul 2020 00:00 UTC'); //resetuje vreme na ono koje unesemo
vremeK.setSeconds(kraj);    // dodaje sekunde na uneto vreme 
let rezultatK = vremeK.toISOString().substr(11, 8);
/* toISOSString ispisuje vreme u velikom formatu YYYY-MM-DDTHH:mm:ss.sss , 
   substr(11,8) iseca iz velikog stringa od pozicije 11 , string koji ima duzinu narednih 8 pozicija (HH-mm-ss)  
*/
console.log(rezultatK);  // kraj koncerta 22:29:47

