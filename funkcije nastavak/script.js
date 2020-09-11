let suma = function(a,b) {
    return a+b;
}
console.log(suma(5,6));


let suma2 = (a,b) => {
    return a + b;
}
console.log(suma2(5,6));

let hello  = () => {
    console.log("Hello world");
}
hello();

// obicna funkcija
function neparan(n){
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
let n = 5 ;
if(neparan(n)) {
    console.log(`Broj ${n} je neparan`);
} 
else {
    console.log(`Broj ${n} je paran`);
}

// Arrow funkcija
let neparan2 = (n) => {
    if(n%2 !=0){
        return true;
    }else {
        return false;
    }
}
n = 8 ;
if(neparan2(n)) { // skraceno od if(neparan2()) == true
    console.log(`Broj ${n} je neparan`);
} 
else {
    console.log(`Broj ${n} je paran`);
}

//13. zadatak od juce kao arrow funkcija

let aritSred = (n,m) => {
    let suma = 0;
    let brojac = 0;
    for(let i = n ; i<=m ; i++){
        suma += i;
        brojac++;
    }
    return suma/brojac;
}

console.log("Aritmeticka sredina je :" +aritSred(2,20));

//14. kao arrow
let aritSred2 = (n,m) => {
    let suma = 0 ;
    let brojac = 0;
    for(let i = n; i<=m ; i++){
        if(i%10 == 3){
            suma += i;
            brojac++;
        }
    }
    return suma/brojac;
}
console.log("Art sredina2 je: " + aritSred2(13,155));

//15.zadatak kao arrow

let vremeLeta = (satP,minP,satS,minS) => {
    vremePolMin = satP * 60 + minP;
    vremeSletMin = satS * 60 + minS;
    trajanjeLeta = vremeSletMin - vremePolMin;
    trajanjeLetaSat = Math.trunc(trajanjeLeta / 60) ;
    trajanjeLetaMin = trajanjeLeta % 60;
    console.log(`Vreme trajanja leta je ${trajanjeLetaSat} sati i ${trajanjeLetaMin} minuta.`);
}
vremeLeta(15,20,18,30);

//16.zadatak arrow

let jaban = (jabuke,banane) => {
    dobreJabuke = jabuke - jabuke*0.2;
    dobreJabuke = Math.round(dobreJabuke/2);
    banane = Math.round(banane/3);
    minimum = dobreJabuke;
    if(banane<minimum){
        minimum=banane;
    }
    return minimum;
}
console.log(`Maksimalno je moguce napraviti ${jaban(10,18)} jaban kolaca!`);

//18.zadatak arrow

let most = (t,p,n) => {
    if(t<p || t>p+n){
        console.log("Treba da krene odmah");
    }else if (t >=p){
        let cekanje = p + n;
        console.log("Treba da krene u " + (cekanje - t + 1) + " sekundi");
    }
}
most(15,20,25);

// funkcija koja za prosledjenu putanju slike pokazuje sliku

let slika = (putanja) => {
    return `<img src='slike/${putanja}' style='width: 150px;'>`;
}
//skracena verzija
let slika2 = (putanja ) => `<img src='slike/${putanja}' style='width: 150px;'>`;

// jos skracenija verzija

let slika3 = putanja  => `<img src='slike/${putanja}' style='width: 150px;'>`;

let div = document.getElementById('conteiner');
div.innerHTML +=slika('kocke.jpg');
div.innerHTML +=slika2('kocke.jpg');
div.innerHTML +=slika3('kocke.jpg');

// veci  od dva uneta broja
// parametri f,je:dva broja
//rezultat: broj
//max2(3,5) => 5
//max2(5,3) => 5
//max2(5,5) => 5

let max2 = (a,b) => {
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}
console.log(max2(3,5)); // 5 (drugi parametar f,je)
console.log(max2(5,3)); // 5 (prvi parametar f.je)
console.log(max2(5,5)); // 5 (drugi parametar f,je)

// najveci od cetiri uneta broja 
/*let max4= (a,b,c,d) => {
    let m1 = max2(a,b);
    let m2 = max2(c,d);
    let m3 = max2(m1,m2);
    return m3;
}*/
let max4 = (a,b,c,d) => max2(max2(a,b), max2(c,d));
/*
let max4d = (a,b,c,d) => {
    let m1 = max2(a,b);
    let m2 = max(m1,c);
    let m3 = max2(m2,d);
    return m3;
}
*/
let max4d = (a,b,c,d) => max2(max2(max2(a,b),c),d);