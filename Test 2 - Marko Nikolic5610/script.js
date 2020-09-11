// zadatak 1.
// postarina 5 din po gramu ,popust 10 posto

let tezina = 230 ;
let cenaBezP = 230 * 5 ;
let cenaPopust = cenaBezP - (cenaBezP * 0.1);

console.log(`Cena bez popusta je ${cenaBezP} dinara`);
console.log(`Cena sa popustom je ${cenaPopust} dinara`);

document.getElementById("tekst2").innerHTML= "Cena bez popusta je " + cenaBezP + " dinara. Cena sa popustom " + cenaPopust + " dinara.";
//zadatak 2. 

let vreme = new Date();
let sati = vreme.getHours();
let minuti = vreme.getMinutes();
let krajRv = 17 *60 ; // toliko minuta
let vremeMin = sati * 60 + minuti ;
let ostatak = krajRv - vremeMin;
let ostatakM = ostatak % 60 ;
let ostatakS = Math.floor(ostatak / 60);

if(sati<9){
    document.getElementById("tekst3").innerHTML= "Radno vreme jos nije pocelo";
} else if(sati>=17){
    document.getElementById("tekst3").innerHTML= "Radno vreme se zavrsilo";
} else {
    document.getElementById("tekst3").innerHTML= "Do kraja radnog vremena je ostalo " + ostatakS + " sati i " + ostatakM + " minuta";
}

//3. zadatak 

let brCvetova = 30 ;
let plavi = 10 ;
let zuti = 13;
let sareni = Math.abs(plavi + zuti - brCvetova) ;

if( plavi>= 10 || zuti >= 10 || sareni>=5){
    console.log(`${sareni}`);
    console.log("Buket je ekskluzivan")
} else {
    console.log("Buket nije ekskluzivan");
}


if(sati<9 || sati>=17){
    document.getElementById("jedan").src= "slike/closed.jpg";
}

if(sati<9 || sati>=17){
    document.getElementById("naslov").innerHTML="Trenutno je zatvoreno";
}else {
    document.getElementById("naslov").innerHTML="Trenutno je otvoreno";
}
