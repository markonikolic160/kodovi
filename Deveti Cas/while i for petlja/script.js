// primer

let datum = new Date();
let mesec = datum.getMonth() + 1 ;

while( mesec == 7) {
    console.log("Mesec je jul");
    mesec++;
}

console.log("Nastavak koda");

// ispis brojeva od jedan do deset 

let i = 1 ;
while( i <= 10 ){
    console.log(i);
    i++;  // i = i + 1;
}
console.log("Zavrsen ispis brojeva");
console.log(i); // i = 11

// ispis od 20 do jedan
// i --  prvo koristi vrednost i pa ga smanjuje 
// --i   prvo smanji i pa tek onda koristi vrednost 
//  komanda consol.log(--i) je zamena za sleldece dve 
//
//
i = 20 ; 
while( i > 0 ) {
    console.log(i);
    i--;
}

//2. zadatak
i = 1 ;
let zapis = "" ;
while(i<=20){
    zapis += i + " ";
    i++ ;
}
console.log(zapis);


// 3. zadatak 
i = 20 ;
while(i >= 1){
    console.log(i);
    i--;
}

// 4. zadatak 
i = 20 ;
while(i >= 1){
    console.log(i);
    i -= 2 ;
}

// ispisati parne od n do m gde je n obavezno manje od m
n = 34 ;
let m = 55 ;
i = n ;
while(i <= m) {
    if( i % 2 == 0){
        console.log(i);
    }
    i++;
}
/* ne moze ovako posto bi ispisalo samo
    jedan broj i ispalo
i = n ;
while(i <= m && i % 2 == 0 ){
    console.log(i);
    i++;
}

*/


//5.zadatak 
i = 0 ;
let suma = 0 ;
while(i<=100){
    suma += i;
    i++;
}
console.log(suma);

// 6. zadatak

i = 1 ;
n = 15 ;
suma = 0 ;
while(i<=n){
    suma += i ;
    i++ ;
}
console.log(suma);

// 7. zadatak 
i = 12 ;
n = 91 ;
suma = 0 ;
while(i<=n){
    suma += i ;
    i++ ;
}
console.log(suma);

// 7. na casu zbir brojeva od n do m

n = 3 ;
m = 10 ;
i = n ;
suma = 0 ;
while(i <= m){
    suma += i ;
    i++;
}
console.log(suma);

// 2. zadatak na casu ispis u istom redu
n = 1 ;
m = 20 ;
i = n ;
let rezultat = "";
while(i<=m) {
    rezultat = rezultat + i + " ";
    i++;
}
console.log(rezultat);


// 8. zadatak 

n = 1 ;
m = 5 ;
i = n ;
suma = 1 ;
while( i <= m ){
    suma *= i;
    i++ ; 
}
console.log(suma);

// 9. zadatak 
n = 1 ;
m = 3 ;
i = n;
suma = 0 ;
while( i <= m ){
    suma = suma + i * i;
    i++ ; 
}
console.log(suma);

// 10. zadatak 

n = 1 ;
m = 10 ;
i = n ;
let kvadrat=0;
let kub=0;

while(i<=m){
    if( i % 2 == 0){
        kvadrat += i * i ;
    }else{
        kub += i * i * i ;
    }
    i++;
}
console.log("Suma kvadrata je " + kvadrat);
console.log("Suma kubova je " + kub);

// 11.zadatak 

let k = 24;
i = 1 ;
let deljenje = 0 ;
while(i<=24){
    if(k % i == 0){
      deljenje += 1;
    }
    i++;
}
console.log("Broj je deljiv sa " + deljenje + " brojeva");

// 12. zadatak 
n = 5 ;
i = 1 ;
deljenje = 0 ;
while(i<=n){
    if(n % i == 0){
      deljenje += 1;
    }
    i++;
}

if(deljenje == 2){
    console.log("Broj je prost");
}else {
    console.log("Broj nije prost")
}


/* prost ili slozen */
n = 4 ;
i = 2 ;
let brojDeljenja = 0 ;
let prost = true;
while(i <= Math.floor(Math.sqrt(n))){
    if(n % i == 0){
        prost = false;
        i++;
    }
}
if(prost == true){
    console.log(`Broj ${n} je prost.`);
}else{
    console.log(`Broj ${n} je slozen.`);
}

// 13. zadatak 
/*
let a = 52 ;
let b = 7 ;
i = 0 ; 
let oduzimanje = a - b ;
let ceoDeo ;
let ostatak = oduzimanje ;

while(ostatak>b){
    ostatak = ostatak - b;
    i++;
}
console.log(i);
*/

//14. zadatak 

n = 2 ;
i = 1 ;
let izraz;
let counter=0 ;
while(i <= n){
    izraz = i**3 - 3 * i + n ;
    i++ ;
    if(izraz % 7 == 0){
        counter++;
    }
}
console.log(`Ima ${counter} izraza koji su deljivi sa 7`);

//15.zadatak

n = 5 ;
i = 1 ;
a = Math.sin(n+i/n);
let alfa = -0.5 ;
let beta = 0.9 ;
suma = 0 ;
while( i<=5 ){
    a = Math.sin(n+i/n);
    i++;
    if(a>=alfa && a<=beta){
        suma += a;
    }
}
console.log(suma);

// let i var
// let definise samo unutar bloka , ne vazi spolj
// ako nema deklaracije isto je kao da je var
// var - oblast vazenja unutar funkcije - var je globalno
let x = 5 ;
let y = 4 ;
if(x<10){
    
    y = y + 1;
}
console.log(x, y);

//16.zadatak 
/* prvi clan 1 , drugi clan 2 
fi = fi-1 + fi-2
*/
n = 6;
let fi1 = 1;
let fi2 = 1;
let fi;
i = 3 ;
while(i <= n) {
    fi = fi1 +fi2;
    fi1 = fi2;
    fi2 = fi;
    i++;
}
console.log(`${n} ti clan niza je ${fi}`);






//17.zadatak 
n=7;
let div = document.getElementById('parent');
let tekst = "bla bla bla";
i = 1;
while(i <= n){
    if(i % 3 == 1){
        //paragrafi 1 , 4 , 7...
        div.innerHTML += `<p style='color:blue'>${tekst}</p>`;

    }
    else if(i%3 == 2){
        div.innerHTML += `<p style='color:red'>${tekst}</p>`;
    }
    else {
        div.innerHTML += `<p style='color:yellow'>${tekst}</p>`;
    }
    i++
}


// for petlja 

for(i=0; i<=10; i++){
    console.log(i);
}
/* inicijalizacija (i=0)
ponovi:
   da li vazi uslov?
   izvrsi blok naredbi
   inkrementacija
*/

for(i=0; i <=10 ; i = i + 1){
    console.log(i);
}

// teorijski ali lose izgleda , nelogicno je i ne koristi se

i = 0;
for(; i<=10 ;){
    console.log(i);
    i++
}

// moze da se uvede ovako promenljiva ali je vidljiva samo utom bloku
for(let j = 5; j<=15; j++){
    console.log(j);
}

//4.zadatak 
//dvostruka vrednost brojeva 5-15

for(i = 5 ; i<=15 ; i++){
    console.log(2*i);
}

/* suma od 1-20 */
suma=0;
for(i = 1 ; i <=20 ; i++){
    suma+=i;
}
console.log(suma);

/* suma parnih 1-20 */

suma = 0 ;
for(i=2 ; i<=20 ; i +=2){
    suma += i ;
}
console.log(suma);

/* suma parnih od n do m   */

n = 5 ; 
m = 25 ;
suma = 0 ;
for(i = n ; i <=m ; i++){
    if(i%2 == 0){
        suma += i;
    }
}
console.log(suma);


//10.zadatak
let div1 = document.getElementById('slike');
n = 3 ;
let pomocno="";
for(i=1 ; i<=n; i++){
    pomocno = i + ".jpg"
    div1.innerHTML += `<img src="`+pomocno+`"> `;
}
console.log(`${pomocno}`);


// 10. zadatak na casu
let divSlike = document.getElementById("slicke");
for(i=1; i<=3 ; i++){
    divSlike.innerHTML += `<img src="${i}.jpg">`
}

// bonus ciklicno pokazuje slike dok ne pokze 10 slika
for(i=1; i<=10 ; i++){
    divSlike.innerHTML += `<br>`;
    if(i%3==1){
        divSlike.innerHTML += `<img src="1.jpg">`;
    } else if(i%3==2){
        divSlike.innerHTML += `<img src="2.jpg">`;
    }else{
        divSlike.innerHTML += `<img src="3.jpg">`;
    }
    
}






//7.zadatak
n = 3 ; 
m = 12 ;
suma = 0 ;
for(i=n ; i<= m ; i++){
    suma += i ;
}
console.log(suma);

//8.zadatak
n = 3 ; 
m = 6 ;
suma = 1 ;
for(i=n ; i<= m ; i++){
    suma *= i ;
}
console.log(suma);

//9.zadatak
n = 3 ; 
m = 5 ;
suma = 1 ;
for(i=n ; i<= m ; i++){
    suma *= i * i ;
}
console.log(suma);
// 9.zadatak na casu 
n = 2 ;
m = 5 ;
suma = 0 ;
for(i=n ; i<=m ; i++){
    suma += i**2 ;
}
console.log(suma); /*suma kvadrat*/




//11.zadatak 
n = 1 ;
m = 30 ;
suma = 0 ;
for(i=n ; i<= m ; i ++){
    if(i%9 == 0){
        suma += i;
    }
}
console.log(suma);
//12.zadatak
n = 20 ;
m = 100 ;
suma = 1 ;
for(i = n ; i <= m ; i ++){
    if(i%11 == 0){
        suma *= i ;
    }
}
console.log(suma);

//13.zadatak
n = 5 ;
m = 150 ;
let brojac13 = 0;
for(i = n ; i<=m ; i++){
    if(i%13 == 0){
       brojac13 = brojac13 +  1 ;
    }
}
console.log(brojac13);



//14.zadatak

n = 10 ;
m = 20 ;
suma = 0 ;
let artSred=0;
let brojac14 = 0 ;
for(i=n ; i <= m ; i++){
    suma +=i;
    brojac14 += 1;
}
console.log(artSred=suma/brojac14);

//15.zadatak     nula je pozitivan broj

n = -8;
m = 35;
let brojPoz=0;
let brojNeg=0;
for(i=n ; i<=m; i++){
    if(i<0){
        brojNeg = brojNeg + 1 ;
    }else{
        brojPoz = brojPoz + 1;
    }
}
console.log("Ima " + brojNeg + " negativnih");
console.log("Ima " + brojPoz + " pozitivnih");

//16. zadatak 

n = 5 ;
m = 50 ;
let brojac16 = 0;
for(i=n ; i<=m ; i++){
    if(i%3 == 0 || i%5 == 0){
        brojac16 += 1;
    }
}
console.log(brojac16);

//17. zadatak 
n = 10 ;
m = 24 ;
let brojac17 = 0 ;
suma = 0 ;
for(i=n ; i<= m ; i++){
    if(i%10 == 4){
        brojac17 += 1 ;
        suma += i ;
    }
}
console.log(brojac17);
console.log(suma);

// 18. zadatak

n = 10 ;
m = 21 ;
a = 7 ;
for(i=n ; i<=m ; i++){
    if(i%a == 0)
    console.log(i);
}

//19.zadatak 
n = 10 ;
m = 15 ;
a = 2 ;
for(i=n ; i<=m ; i++){
    if(i%a != 0)
    console.log(i);
}

//20. zadatak 
n = 10 ;
m = 15 ;
a = 2 ;
suma = 0;
for(i=n ; i<=m ; i++){
    if(i%a != 0)
    suma += i;
}
console.log(suma);

//21.zadatak 
n = 2 ;
m = 10 ;
a = 2 ;
suma = 1;
for(i=n ; i<=m ; i++){
    if(i%a == 0)
    suma *= i;
}
console.log(suma);