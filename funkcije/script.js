function mojaFunkcija(){
    console.log("Moja funkcija");
}
// prazna , ne prosledjujemo joj vrednost
mojaFunkcija();
for(let i = 1 ; i<=5 ; i++){
    console.log(i);
}
mojaFunkcija();
console.log("helloooo");
mojaFunkcija();

// prosledjujemo joj jednu vrednost
let promenljiva = "moja promenljivaaaaaaa";

function ispisiTekst(tekst){
    console.log(tekst);
}

ispisiTekst("bla bla bla");
ispisiTekst("pravim web sajt");
ispisiTekst("neki tekst jhkjhkjhkjh");
ispisiTekst(promenljiva);

// prosledjujemo jednu vrednost
function ispisiKorisnika(ime){
    console.log(`Ulogovani korisnik je ${ime}`);
    console.log("Dobrodosli");
}
ispisiKorisnika("Stefan");

// prosledjujemo dve vrednosti 

function korisnik(ime, prezime, god){
    console.log(`Korisnik je: ${ime} ${prezime} ima ${god} godina`);
}

korisnik("Jelena","Matejic",25);
korisnik("Stefan","Stanimirovic",30);
let a = "Milena";
let b = "Djordjevic";
korisnik(a, b); // vrednost koju ne prosledite je undefined

// funkcija koja odredjuje zbir dva broja
function zbir(br1 , br2){
    let rez = br1 + br2 ;
    console.log(rez);
}
zbir(2, 3 );
zbir(-21 , -5);
let x = 5 ;
let y = 7 ;
zbir(x,y);

// funkcija koja vraca rezultat -return f.ja

function zbirTri(br1 , br2 , br3){
    let rez = br1 + br2 + br3;
    return rez ;
}

let z = zbirTri(1,2,5);
console.log("Rezultat je: " + z);
console.log("Rezultat je: " + zbirTri(4,1,7));

let i = zbirTri(1,1,1); //vraca 3
let j = zbirTri(2,2,2); // 6
let k = zbirTri(3,3,3); // 9
console.log(i,j,k);
let t = zbirTri(i,j,k);
console.log(t);

console.log(zbirTri( zbirTri(1,1,1) , zbirTri(2,2,2) , zbirTri(3,3,3)));
// zbirTri( 3, 6 , 9 ) = 18

zbir(i , j);

//kada f.ja ispisuje samo je pozovemo
//kada f.ja vraca onda sacuvamo njenu vrednost negde pa tek onda ispisemo

// 3. zadatak  vraca tacno ako je br neparan u suprotnom vraca netacno
function neparanBroj(broj){
    if(broj%2 != 0){
        //neparan je 
        return true;
    }else {
        //paran
        return false;
    }
}
let nb = neparanBroj(5);
console.log(nb);

nb = neparanBroj(10);
console.log(nb);

if(nb == true){
    console.log("Prosledjeni broj je neparan.");
}else {
    console.log("Proledjeni broj je paran");
}

for(let i = 0 ; i<10 ; i++){
    let pom = neparanBroj(i);
    if(pom == true){
        console.log(`Broj ${i} je neparan`);
    }else {
        console.log(`Broj ${i} je paran`);
    }
}

// 4. zadatak 

function maks2(max1,max2){
    if(max1>max2){
        return max1;
    }else {
        return max2
    }
}

let maksimalniDva = maks2(8,15);
console.log("Veci broj je: " +maksimalniDva);

function maks4(max1 , max2 , max3, max4){
    let najveci = max1;
    if(max2>najveci){
        najveci = max2;
    }if(max3>najveci){
        najveci = max3;
    }if(max4>najveci){
        najveci=max4;
    } return najveci;
}
let maksimalniCetiri = maks4(5,98,-251,53);
console.log("Najveci broj od cetiri uneta je: " +maksimalniCetiri);

//5.zadatak 

function prikaziSliku(url){
    let divSlika = document.getElementById(`slika`);
    divSlika.innerHTML = `<img src="${url}">`;

}
prikaziSliku("https://lh3.googleusercontent.com/proxy/puev4GS_DV-wsEe1VsJt3gxEZq87dUZjsKpMmUoTBtSftROhL1IDaRfybCrXeTtpujFx6-dFaRnUgsdZdBGFVY-YuGqfESUS0g");

//6. zadatak 

function obojiParagraf(boja){
    let paragrafBoja = document.getElementById(`boja`);
    return paragrafBoja.style.color = `${boja}`;

}
obojiParagraf("blue");

//7.zadatak 
function velicinaFonta(brojFonta){
    let paragrafFont = document.getElementById("font");
    return paragrafFont.style.fontSize = `${brojFonta}`+"px";
}
velicinaFonta(50);

//8.zadatak 

function ispisiRecenicu(recenica){
    let divRecenica = document.getElementById(`recenice`);
    for(let i = 10 ; i<=30 ; i+=5){
        divRecenica.innerHTML += `<p style="font-size:${i}px"> ${recenica} </p>`
    }
}
ispisiRecenicu("festina lente")

//10.zadatak 
/*
function deljivTri(n , m){
    let brojac = 0;
    for(let i = n ; i<=m ; i++){
        if(i%3 == 0){
            console.log(i);
            brojac +=1;
        }
    }
    console.log(brojac);
}
deljivTri(3,10);
*/
//10.zadatak na casu 
function deljiviSaTri(n,m){
    let br = 0;
    for(let i = n ; i<=m ; i++){
        if(i%3 == 0){
            console.log(i);
            br ++;
        }

    }
    return br;
}
let dt = deljiviSaTri(11,17);
console.log("broj deljivih sa tri je: " + dt);

//11.zadatak suma brojeva od n do m

function sumaBrojeva(n , m ){
    let suma = 0 ;
    for(let i = n ; i<= m ; i++){
        suma += i;
    }
    return suma;
}

let sm = sumaBrojeva(1,100);
console.log("suma je : " +sm);

//12.zadatak nalazi proizvod br od n do m

function proizvodBrojeva(n,m){
    let suma = 1;
    for(let i = n ; i<=m ; i++){
        suma *=i ;
    }
    return suma;
}
let proizvod = proizvodBrojeva(1,5);
console.log("proizvod je : " +proizvod);

//13.zadatak 
/*
function aritmetickaSre(n,m){
    let suma = 0 ;
    let counter = 0;
    for(let i = n ; i<=m ; i++){
        suma += i ;
        counter += 1 ;
    }
    console.log(suma/counter);
}
aritmetickaSre(1,5); 
*/
//14.zadatak

function aritmetickaTri(n,m){
    let s3 = 0;
    let br3 = 0;
    for(let i = n ; i<=m ;i++){
        if(i%10 == 3){
            s3 += i;
            br3++;
        }
    }
    let arsr3 = s3/br3;
    return arsr3;
}

console.log("aritmeticka sredina br zadnja cifra tri je: " + aritmetickaTri(30,50));
   

//13. na casyu  ; samo koristi vec postujucu f.ju
function aritmetickaSredina(n,m){
    let s = sumaBrojeva(n,m);

    let br = 0;
    for(let i = n ; i<=m; i++ ){
        br ++;
    }

    let arsr = s/br;
    return arsr;
}
console.log("art sredina je " + aritmetickaSredina(1,6));

//17.zadatak 
//n meseci traje 
//a dinara osnovica
//povisica d dinara svakog meseca
//uneti n , a , d

/* 
primer:
n =3 
a = 1000
d = 300

i = 1 ; plata1 = 1000
i = 2 ; plata2 = 1000 + 300
i = 3 ; plata3 = 1000 + 300 + 300
i = 4 ; plata4 = 1000 + 300 + 300 + 300
ukupna plata = plata1 +plata2 +plata3 + plata4
*/

function placenaPraksa(n , a , d){
    ukupnaPlata = 0 ;
    for(let i = 1; i<=n ; i++){
        let tekuciMesecPlata = a + (i-1)*d;
        ukupnaPlata += tekuciMesecPlata;
    }
    return ukupnaPlata;
}

n = 4 ;
a = 1000 ;
d = 300 ;

console.log(`Ukupna plata nakon ${n} meseci sa osnovom ${a} i povisicom 
${d} iznosi ${placenaPraksa(n,a,d)}`);

//15.zadatak 
function vremeLeta(satP,minP,satS,minS){
    vremePolMin = satP * 60 + minP;
    vremeSletMin = satS * 60 + minS;
    trajanjeLeta = vremeSletMin - vremePolMin;
    trajanjeLetaSat = Math.trunc(trajanjeLeta / 60) ;
    trajanjeLetaMin = trajanjeLeta % 60;
    console.log(`Vreme trajanja leta je ${trajanjeLetaSat} sati i ${trajanjeLetaMin} minuta.`);
}

vremeLeta(15,50,20,10);

//16.zadatak 
// jaban = 2 jabuke i 3 banane ; 20% jabuka je osteceno

function jaban(jabuke, banane){
    dobreJabuke = jabuke - jabuke * 0.2 ;
    dobreJabuke = Math.round(dobreJabuke / 2);
    banane = Math.round(banane / 3);
    let minimum = dobreJabuke;
    if(banane<minimum){
        minimum = banane ;
    }
    return minimum;
}
console.log(`Maksimalno je moguce napraviti ${jaban(10,5)} jaban kolaca!`);

//9.zadatak 

function dani(n){
    if(n == 0 || n%7 == 0){
        console.log("Nedelja");
    }else if (n==1 || n%7 == 1){
        console.log("Ponedeljak");
    }else if (n==2 || n%7 ==2){
        console.log("Utorak");
    }else if (n==3 || n%7 ==3){
        console.log("Sreda");
    }else if (n==4 || n%7 ==4){
        console.log("Cetvrtak");
    }else if (n==5 || n%7 ==5){
        console.log("Petak");
    }else if (n==6 || n%7 ==6){
        console.log("Subota");
    }
}
dani(22);

//18.zadatak
function most(t, p , n){
    if(t<p || t>p+n){
        console.log("Treba da krene odmah");
    }else if (t >=p){
        let cekanje = p + n;
        console.log("Treba da krene u " + (cekanje - t + 1) + " sekundi");
    }
}
most(20,10,11); 
