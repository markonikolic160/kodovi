console.log("Klase film");

import {Film} from "./film.js";

let f1 = new Film("Tenet","Kristofer Nolan",2020,[9.9, 10, 9.8, 9.2, 9, 9.4]);
let f2 = new Film("Film2","Kristofer Nolan",2014,[7, 9.2, 8.5, 9, 7.4, 9]);
let f3 = new Film("Film3","Reziser3",1998,[9, 6.5 , 7, 8.7, 9]);


f1.stampaj();
console.log(f1.naslov);
console.log(f1.reziser);
console.log(f1.godIzdanja);
console.log(f1.prosek());

let films =[f1,f2,f3];

let vekFilm = (niz,vek) =>{
    vek = vek *100;
    niz.forEach(elem =>{
        if(elem.godIzdanja>vek){
            console.log(elem.naslov);
        }
    });
}
vekFilm(films,20);

//funkcija prosecna ocena svih flmova

let prosecnaOcena = films =>{
    let sum = 0;
    let num = 0;
    films.forEach(film =>{
        let filmOcene = film.ocene;
        filmOcene.forEach(ocena =>{
            sum += ocena;
            num++;
        });
    });
    let avg = sum / num ;
    return avg;
}
console.log(prosecnaOcena(films));



let najboljeOcenjeni = films => {
    let maxOcena = films[0].prosek();
    let maxFilm = films[0];
    films.forEach(f => {
        if(f.prosek() > maxOcena){
            maxOcena = f.prosek();
            maxFilm = f;
        }
    });
    return maxFilm;
}
najboljeOcenjeni(films).stampaj();


//osrednji film 

let osrednjiFilm = films =>{
    let prosecnaOcenaSvih = prosecnaOcena(films);
    let minRazlika = Math.abs(films[0].prosek() - prosecnaOcenaSvih);
    let minFilm = films[0];

    films.forEach(f =>{
        let razlika = Math.abs(f.prosek() - prosecnaOcenaSvih);
        if(razlika < minRazlika){
            minRazlika = razlika;
            minFilm = f ;
        }
    });
    return minFilm;
}
osrednjiFilm(films).stampaj();

//najbolji film i njegova najslabija ocena 

let najmanjaOcenaNajboljeg = films => {
    let najboljiFilm = najboljeOcenjeni(films);

    let najmanja = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach( o => {
        if(najmanja > o){
            najmanja = o;
        }
    });
    console.log(najboljiFilm.naslov, najmanja);
}
najmanjaOcenaNajboljeg(films);

// najcesca ocena svih flmova

let nizOcena = [];
films.forEach(f =>{
    let filmOcene = f.ocene;
    filmOcene.forEach( o => {
        nizOcena.push(o);
    });
});

let najcescaOcena = nizOcena =>{

    let najucestalijaOcena = nizOcena[0];
    let brojPojavNajucestalije = 1; //ili =0 , moze oba nacina
    let tekuci;
    let brPojavTekuceg;

    for(let i=0 ; i<nizOcena.length; i++){
        tekuci = nizOcena[i];
        brPojavTekuceg = 0;
        for(let j=0 ; j<nizOcena.length; j++){
            if(tekuci == nizOcena[j]){
                brPojavTekuceg++;
            }
        }
        if(brPojavTekuceg > brojPojavNajucestalije){
            brojPojavNajucestalije = brPojavTekuceg;
            najucestalijaOcena = tekuci;
        }
    }
    return najucestalijaOcena;
}
let pomniz = [10,9,10,9,8,10,9,7,6]
console.log(najcescaOcena(pomniz));


//iznad ocene
let iznadOcene = (ocena,films)=>{
    let pomFilms =[];//cuva filmove sa vecom pro.ocenom od zadate
    films.forEach(f => {
        let prosecna = f.prosek();
        if(prosecna > ocena){
            pomFilms.push(f);
        }
    });
    return pomFilms;
}






//iznad ocene noviji

let iznadOceneNoviji = (ocena,films) =>{
    let pomFilms = iznadOcene(ocena,films);
    let godNajnov = pomFilms[0].godIzdanja;
    let najnov = pomFilms[0];

    pomFilms.forEach( pf =>{
        if(pf.godIzdanja > godNajnov){
            godNajnov = pf.godIzdanja;
            najnov = pf;
        }
    });
    return najnov;
}
console.log(iznadOceneNoviji(8,films));
iznadOceneNoviji(8,films).stampaj();