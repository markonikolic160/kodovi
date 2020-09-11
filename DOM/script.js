console.log(document);
console.log(typeof document);
console.log(document.URL);

console.log(document.links);
console.log(document.anchors);


//hvatanje elem sa istom klasom
let elements = document.getElementsByClassName('links');
console.log(elements);

// dohvatanje svih elem sa zadatim tagom 
let links = document.getElementsByTagName('a');
console.log(links);

// dohvat svih elem sa zadatom vrednoscu name atributa

let temp = document.getElementsByName('link');
console.log(temp);

// prolazak kroz clanoce kolekcij preko for petlje
for(let i = 0 ; i < elements.length;i++){
    console.log(elements[i]);
}

//prolazak kroz clanove kolekcije sa foreach 
//ne radi sa HTML kolekcijom jer ona ne obezbedjuje foreach petlju
/*
elements.forEach(elem => {
    console.log(elem);
});
*/ 

// ali moze ovako , ugradjena f.ja ga konvertuje u niz pa onda foreach

let elementsArray = Array.from(elements);
elementsArray.forEach(elem => {
    console.log(elem);
});

//dohvatanje prvog elementa koji zadovoljava validan CSSselektor
let link = document.querySelector("div a:nth-child(2)");
console.log(link); //vraca objekat

//dohvatanje svih elem koji zadovoljavaju validan CSS selektor

let linksDiv = document.querySelectorAll("div.links a");
console.log(linksDiv); //vraca nodlist

// Kretanje kroz NodeList je dozvoljeno i for i foreach

for(let i = 0 ; i < linksDiv.length; i++){
    console.log(linksDiv[i])
};

linksDiv.forEach(link => {
    console.log(link);
});

//vezbanje 
let prviParagraf = document.querySelector("p");
console.log(prviParagraf);

let divEror = document.getElementsByClassName("error");
console.log(divEror);

let redTabela = document.querySelector("tr:last-child");
console.log(redTabela);

//let sviLinkovi = document.getelementsByTagName("a");
let sviLinkovi = document.querySelectorAll("a");
for(let i = 0 ; i <sviLinkovi.length ; i++){
    console.log(sviLinkovi[i])
};

let sveSlike = document.querySelectorAll("img");
for(let i = 0 ; i <sveSlike.length ; i++){
    console.log(sveSlike);
};

//menjanje sadrzaja elemenata koje dohvatimo

link.innerHTML = "<span style='font-style:italic'>Novi tekst</span> linka";

//menjanje atributa

// 1.nacin link.target = "blank";
//2.nacin
link.setAttribute('target','blank');
//slika.src = "images/slika.jpg";
//slika.alt = "tekst koji se prikazuje kada nema slike";

//menjanje stila elementa
//1.nacin

link.style.color = "red";
link.style.backgroundColor = "orange";
link.style.textDecoration = "none";
link.style.border = "1px solid black";
link.style.borderRadius = "50%";

//2.nacin 
//link.setAttribute('style', 'color:red; background-color:orange;text-decoration:none');

//dodavanje vrednosti atributa
link.innerHTML += " za kliktanje";
link.style.border = "1px";
link.style.border += " solid";
link.style.border += " black";

// svakom paragfarfu dodati i^2 , gde je i redni broj paragrafa u dokumentu

let paragrafi = document.querySelectorAll("p");
paragrafi.forEach((p,i) => {
    let kv = (i+1)*(i+1);
    p.innerHTML += kv;
});

//svi paragrafi dodati vazno

paragrafi.forEach (par => {
    par.innerHTML += "VAZNO";
});

// error dodati naslov greska
let divEr = document.querySelectorAll("div.error");
divEr.forEach(elem => {
    elem.innerHTML += "<h1>Greska!</h1>";
})

//slikama alternativni tekst
sveSlike.forEach(slika => {
    slika.setAttribute('alt','alternativni tekst');
});

//svi paragrafi u ljubicasto 

paragrafi.forEach(par => {
    par.style.color = "purple";
});

//parni paragrafi pozadina zelena,neparni crvena

paragrafi.forEach((par,i) => {
    if(i%2==0){
        par.style.backgroundColor = "green";
    } else {
        par.style.backgroundColor = "red";
    }
});

// linkovi pading 5px,font size 18px,text decor none

sviLinkovi.forEach(elem => {
    elem.style.padding = "5px";
    elem.style.fontSize = "18px";
    elem.style.textDecoration = "none";
});

sviLinkovi.forEach((elem,i) =>{
    if(i%2 == 0){
        elem.style.backgroundColor = "green";
        elem.style.color = "purple";
    } else {
        elem.style.backgroundColor = "blue";
        elem.style.color = "white";
    }
});

// okvir slike u zavisnosti od png
sveSlike.forEach(elem =>{
    if(elem.src.includes(".png")){
       elem.style.border = "2px solid red";
    }
});


// linku menjati target svojstvo
for(let i = 0 ;i<links.length ; i++){
    if(links[i].target != " blank"){
        links[i].target = " blank"
    }else{
        links[i].target = " top"
    }
}

console.log(paragrafi[1].parentNode);
//daje drugi elem iz parag liste pa njegov roditelj
console.log(document.querySelector("a:nth-child(2)").parentNode);
console.log(paragrafi[1].parentNode.childNodes[3]);//vraca nodlist kao res znaci moze foreach

// niz imen staviti u linkove

let nizImena = ["Svetozar","Mika","Sasa","Pera"];
let imena10 = document.getElementById('zadatak');
nizImena.forEach(elem => {
    if(elem.startsWith("S")){
        imena10.innerHTML +=`<a href="#" target="blank">${elem}</a>        `;
    } else {
        imena10.innerHTML +=`<a href="#">${elem}</a> `;
    }
});

// bojenje stavki liste
let elementiListe = document.querySelectorAll("li");
elementiListe.forEach((elem,i) => {
    if(i%2 == 0){
        elem.style.color = "red";
    } else {
        elem.style.color = "blue"
    }
});

// promena celija tabele 

let promenaTabele = document.querySelectorAll("td");
promenaTabele.forEach((elem,i) => {
    if(i%2==0){
        elem.style.border = "1px solid black";
        elem.style.margin = "2px";
        elem.style.padding = "5px";
        elem.style.backgroundColor = "lightblue";
    }
})

//dodavanje stavki liste !!popravi upis!!
let napraviListu = document.createElement('ul');
napraviListu.id = "zadatakLista";
document.body.appendChild(napraviListu);
let listaImena =document.getElementById('zadatakLista');
nizImena.forEach(elem => {
    listaImena += `<li>${elem}</li>`
});
napraviListu.innerHTML += listaImena;
//promena boje naizmenicno
let novaListaCas =document.querySelectorAll("#zadatakLista li");
novaListaCas.forEach((elem,i)=>{
    if(i%2==0){
        elem.style.color = "red";
    } else {
        elem.style.color = "blue";
    }
})

//dodavanje tabele

let napraviTabelu = document.createElement('table');
napraviTabelu.id = "zadatakTabela";
document.body.appendChild(napraviTabelu);
let tabelaImena = document.getElementById('zadatakTabela');
let upis = "<table>";
nizImena.forEach(elem => {
    upis +=`<tr><td>${elem}</td></tr>`
    
});
upis += "</table>"
tabelaImena.innerHTML += upis;

let elementiListeCas = document.querySelectorAll('#zadatakTabela td');
elementiListeCas.forEach((elem,i) => {
    if(i%2==0){
        elem.style.border = "1px solid black";
        elem.style.margin = "2px";
        elem.style.padding = "5px";
    }
});



// kreiranje novog cvora u dom stablu
let noviParagraf = document.createElement('p');
noviParagraf.innerHTML = "Text novog novog paragrafa";
noviParagraf.style.color = "blue";

//dodavanje novog cvora kao dete postojeceg elementa
document.body.appendChild(noviParagraf);

//brisanje cvora iz dom stabla
//document.body.removeChild(noviParagraf);

//zamena cvora u dom stablu

let novilink = document.createElement('a');
novilink.innerHTML = "klikni bas ovde";
novilink.href = "https://google.com";

document.body.replaceChild(novilink,noviParagraf);

// dodavanje klase elementu
novilink.classList.add('link');

//  izgleda ne funkcionise
let div1987 = document.getElementsByClassName('links')[0];
let noviNoviLink = document.createElement('a');
noviNoviLink.innerHTML = "klikni i ovde i ovde ";
noviNoviLink.href = "#";

//16. slajd zadatak
//dodavanja razlicite clase parnim i neparnim
/*
paragrafi.forEach((elem,i) =>{
    if(i%2==0){
        elem.classList.add('error');
    } else {
        elem.classList.add('success');
    }
});
*/

//ako sadrze rec postaviti klasu
paragrafi.forEach(elem => {
    if(elem.textContent.includes('error')){
        elem.classList.add('error');
    } else if(elem.textContent.includes('success')){
        elem.classList.add('success');
    }
});

// svi sto imaju klasu error skinuti tu klasu ko nema dodati
paragrafi.forEach(elem =>{
    elem.classList.toggle('error');
});
