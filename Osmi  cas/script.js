console.log("pozdrav")

if (3 < 5){
    console.log("tri je manje od pet");
}

if (3< -5){
    console.log("tri je manje od pet");
}

let a = 110;
let b = 50;
if (a < b){
    console.log(`${a} je manje od ${b}`);
}

let x = 5;
let y = "5";
if(x==y){
    console.log(`${x} i ${y} su jednake vrednosti`);
}

if(x===y){
    console.log(`${x} i ${y} su jednaki po tipu i vrednosti`);
}

// if -  else 

if(a<=b){
    console.log(`${a} je manje ili jednako ${b}`);
} else {
    console.log(`${a} nije manje od ${b}`);
}

// zadatak : da li su dve vrednosti jednake

let v1=5;
let v2=6;

// 1,nacin
if(v1==v2){
    console.log("jednake su");
} else{
    console.log("nisu jednake");
}

// 2 nacin
if(v1!=v2){
    console.log("nisu jednake");
} else {
    console.log("jednake su");
}

let prvi = 15;
let drugi = 21;

if(prvi<drugi){
    console.log(`${prvi} je manje od ${drugi}`);
}
if(prvi>drugi){
    console.log(`${prvi} je vece od ${drugi}`)
}

let temp = -8;

if(temp>=0){
    console.log("Temperatura je u plusu");
} else {
    console.log("Temperatura je u minusu");
}

// 3. zadatak 15slajd
let divPol = document.getElementById("pol");
let pol = "z";
if(pol=="m"){
    //muski pol
    divPol.innerHTML = `<img src="slike/person (1).png">`;
} else {
    //zenski pol
    divPol.innerHTML = `<img src="slike/person.png">`
}

let sati = new Date().getHours();
if(sati<12){
    console.log("sada je jutro");
} else {
    console.log("sada je popodne");
}



let godina= new Date().getFullYear();
let godRodje = 1987;

if(godina-godRodje>=18){
    console.log("Osoba je punoletna");
} else {
    console.log("Osoba je maloletna");
}

// primer if-else if - else 

let br=5;
if(br <=10){
    console.log("Broj je u prvoj desetici");
} else if (br<=20){
    console.log("Broj je u drugoj desetici");
} else if (br<=30){
    console.log("Broj je u trecoj desetici");
} else {
    console.log("Broj je veci od trideset");
}
console.log("If - else if - else je zavrsen")


// 6. zadatak  samostalno
let l = 8;
let k = 9;
let j = 5;
 
if(l>=k && l>=j){
    console.log(`${l} je najveci broj`);
} else if (k>=l && k>=j){
    console.log(`${k} je najveci broj`);
} else {
    console.log(`${j} je najveci broj`);
}

// 6. na casu 
let b1 = 5;
let b2 = 3;
let b3 = 7;

// pretpostavka
let najveci = b1;
if(b2 > najveci){
    najveci = b2;
}
if(b3> najveci){
    najveci = b3;
}

console.log(`Najveci je ${najveci}`);

// 7. zadatak 

let poeni = 81 ;

if(poeni<=50){
    console.log("Ucenik nije polozio ispit");
} else if (poeni<=60){
    console.log("Ucenik je dobio ocenu 6");
} else if (poeni<=70){
    console.log("Ucenik je dobio ocenu 7");
} else if (poeni<=80){
    console.log("Ucenik je dobio ocenu 8");
} else if (poeni<=90){
    console.log("Ucenik je dobio ocenu 9");
} else if (poeni>100){
    console.log("Nevalidan unos");
} else {
    console.log("Ucenik je dobio ocenu 10");
}

// 8. zadatak
let danUNedelji = new Date().getDay();

if(danUNedelji == 0 || danUNedelji == 6){
    console.log("Vikend je ");
} else {
    console.log("Danas je radni dan");
}

// 9. zadatak 

if(sati<12){
    console.log("Dobro jutro");
} else if(sati<18){
    console.log("Dobar dan");
} else {
    console.log("Dobro vece");
}

// 10. zadatak 
let dd1 = 25;
let m1 = 6;
let g1 = 2020;

let dd2 = 25;
let m2 = 7;
let g2 = 2020;

if(g1<g2){
    console.log(`${dd1}.${m1}.${g1}`);
} else if(g2 < g1){
    console.log(`${dd2}.${m2}.${g2}`);
} else {
    if(m1<m2){
        console.log(`${dd1}.${m1}.${g1}`);
    } else if(m2<m1){
        console.log(`${dd2}.${m2}.${g2}`);
    } else {
        if(dd1<dd2){
            console.log(`${dd1}.${m1}.${g1}`);
        } else if(dd2<dd1){
            console.log(`${dd2}.${m2}.${g2}`);
        } else {
            console.log("Datumi u isti");
        }
    }
}


// 12. zadatak

let dok1a = 10 ;
let dok1b = 18 ;
let dok2a = 12 ;
let dok2b = 21 ;

if(dok2a>dok1b || dok1a>dok2b){
    console.log("ne poklapaju se ");
} else {
    console.log("poklapaju se ");
}


/*
if (dok1a > dok1b){
    dok1b = 24;
} if (dok2a > dok2b){
    dok2b = 24;
} 

if(dok2a <= dok1b && dok2a >= dok1a){
    console.log("poklapaju se ");
} else if (dok2b >= dok1a && dok2b <= dok1b){
    console.log("poklapaju se ") ;
} else if (dok1a <= dok2b && dok1a >= dok2a){
    console.log("poklapaju se ")
} else if (dok1b >= dok2a && dok1b <= dok2b){
    console.log("poklapaju se ")
} else {
    console.log("ne poklapaju se ")
}
*/
// 11. zadatak 

sati = new Date().getHours();
if( sati < 17 && sati >= 9){
    console.log(`sada je ${sati} i firma je otvorena`);
} else (console.log(`sada je ${sati} i firma je zatvorena`))

// 13. zadatak 

x = 1021 ;
if(x % 2 == 0 ){
    console.log("paran broj");
} else {
    console.log("broj je neparan");
}

//14. zadatak 

x = 130 ;
if(x % 3 == 0){
    console.log("broj je deljiv sa tri");
} else {
        console.log("broj nije deljiv sa tri");
}

//15.zadatak 

x = 19 ;
y = 15 ;

if( x > y){
    console.log( x - y);
} else if( x < y){
    console.log( y - x);
} else {
    console.log("Brojevi su isti");
}

//16.zadatak 
x = -5 ;

if( x <= 0 ){
    console.log( x -= 1);
} else {
    console.log( x += 1);
}

//17.zadatak

let broj1 = 16 ;
let broj2 = 29 ;
let broj3 = 7 ;

najveci = broj1;
if(broj2 > najveci){
    najveci = broj2
} else if(broj3>najveci){
    najveci = broj3
}
console.log(`najveci broj je ${najveci}.`);

let najmanji = broj1;
if(broj2 < najmanji){
    najmanji = broj2
} else if(broj3<najmanji){
    najmanji = broj3
}
console.log(`najmanji broj je ${najmanji}.`);

let srednji = broj1 + broj2 + broj3 - najmanji - najveci ;
console.log(`srednji broj je ${srednji}`);

// 18. zadatak

x = 10.47 ;
if( x % 1 != 0 ){
    console.log("Broj nije ceo.")
} else {
    console.log("Broj je ceo.")
}
// na predavanju 
// sa math.trunc
// da se pita da li je integer
//sa math,floor


// 20. zadatak

x = 587 ;
y = 8 ;
let veci;
if ( x > y){
    veci = x
} else if ( y >x ){
    veci = y
} 

if ( veci % 2 == 0){
    console.log("Broj je paran.");
} else {
    console.log("Broj je neparan.");
}

//21. zadatak 
// 6. zadatak sam samostalno tako uradio

//22. zadatak

let temperatura = 41 ;
if( temperatura < -15 || temperatura > 40){
    console.log("EXTREMNA TEMPERATURA!!!!")
} else { 
    console.log("Temperatura je prihvatljiva.")
}

//23. zadatak 

if( godina % 4 == 0 && godina % 100 !=0){
    console.log(` Godina ${godina} je prestupna.`);
} else if ( godina % 400 == 0){
    console.log(` Godina ${godina} je prestupna.`);
} else {
    console.log(` Godina ${godina} nije prestupna.`);
}
// 23 na casu 
let godina23 = 2000;
if((godina23 % 4 == 0 && godina23 % 100 !=0) || godina23 % 400 == 0){
    console.log("prestupna godina");
} else {
    console.log("prosta godina");
}

//24. zadatak 
let prviSatiP = 10 ;
let prviMinP = 45 ;
let prviSatiK = 18 ;
let prviMinK = 15 ;

let drugiSatiP = 7 ;
let drugiMinP = 20 ;
let drugiSatiK = 15;
let drugiMinK = 55 ;

let prviPocetakMin = prviSatiP * 60 + prviMinP ;
let prviKrajMinuti = prviSatiK * 60 + prviMinK ;
let drugiPocetakMin = drugiSatiP * 60 + drugiMinP ;
let drugiKrajMinuti = drugiSatiK * 60 + drugiMinK ;

if(drugiPocetakMin > prviKrajMinuti || prviPocetakMin > drugiKrajMinuti){
    console.log("Nema preklapanja");
} else {
    let vrednosti = [prviPocetakMin,prviKrajMinuti,drugiPocetakMin,drugiKrajMinuti];
    vrednosti = vrednosti.sort(function(a, b){return b-a});
    let preklapanje = vrednosti[1] - vrednosti[2];
    console.log(`Preklapanje je ${preklapanje} minuta.`);
}


//25. zadatak vec radjeno ispitivanje najveceg od tri broja 
//26. zadatak

if ( danUNedelji == 0 || danUNedelji == 6){
    if ( sati >= 10 && sati < 18){
        console.log("Prodavnica je otvorena");
    } else {
        console.log("Prodavnica je zatvorena");
    } 
} else if ( sati >= 9 && sati < 22){
            console.log("Prodavnica je otvorena");
        } else {
         console.log("Prodavnica je zatvorena");
        }
  
// na casu zadatak za butik

let danButik = 0 ;
let satButik = 14 ;
let minButik = 58 ;

if (danButik==0 || danButik==6){
     if(satButik>=10 && satButik<18){
         console.log("Vikend otvoreno");
     } else {
         console.log("Vikend zatvoreno");
     }
} else {
    if(satButik>=9 && satButik<20){
        console.log("Radni dan otvoreno");
    } else {
        console.log("Radni dan otvoreno");
    }
}

// neke promene za comit