function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div = document.getElementById('container');
    div.innerHTML += poruka;
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0 ; i < niz.length; i++){
        poruka += niz[i] + " ";
    }
    cb(poruka); //poziv callback f.je
}

let a = [9,-7,3,4,5];
let b = [1,1,1,1];
ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);

//Poziv f,je ispisNiza preko anonimnih funkcjija

ispisNiza(a, poruka =>{
    console.log(poruka);
});


ispisNiza(a, poruka => {
    let div = document.getElementById('container');
    div.innerHTML += poruka;
});

// forEach 
// ispis niza a preko foeach petlje
// foreach je metoda niza i prihvata calback f.ju kao argument


//prva varijanta - prosledimo obicnu f,ju foreachu

function ispisElementaNiza(elem){
    console.log(`element niza je: ${elem}`);
}

a.forEach(ispisElementaNiza);

// Druga varijanta - prosledjujemo anonimnu f.ju
a.forEach(elem =>{
    console.log(`Element niza je: ${elem}`);
});


//ispis niza foreachom - pristupamo i indexu i elementu niza

a.forEach((elem,i) =>{
    console.log(`Element niza sa ind ${i} je ${elem}`);
});

//16.zadatak 

let ispisLista = niz => {
    let result = "<ul>";
    niz.forEach(elem => {
        result += `<li>${elem}</li>`;
    });
    result += "</ul>" ;
    let div = document.getElementById('container');
    div.innerHTML += result;
}

let lista1 = ["Jabuka","Kruska","Sljiva","Kajsija"];
let lista2 = ["Jaja","Mleko","Hleb"];

ispisLista(lista1);
ispisLista(lista2);

// 17. zadatak 
let listaTabela = ["KK.Pirot ","Crvena Zvezda ","Denver ","Sacramento ","LA Lakers"];

let ispisTabela = niz => {
    let myTable = document.getElementById("tabela");
    for(let i = 0 ; i < niz.length ; i++){
        myTable.innerHTML += `<td>${niz[i]}</td>`
    }
}
ispisTabela(listaTabela);

//18.zadatak niz stringova putanje do slika

let prikazSlika = niz => {
    let putanja = "";
    niz.forEach(elem => {
        putanja += `<img src="${elem}">`;
    });
    let div = document.getElementById('container');
    div.innerHTML += putanja ;
}
let listaSlika = ["slike/1.jpg","slike/2.jpg","slike/3.jpg"];
prikazSlika(listaSlika);

// 19 .zadatak  samo sa for

let nizDuzina = ["Automobil","Lopta","Kuca","Jabuka","Televizija"];
for( let i = 0 ; i<nizDuzina.length ; i ++){
    console.log(nizDuzina[i].length);
    
}

// sa foreach
let duzinaStringa = niz =>{
    niz.forEach(elem =>{
        console.log(elem.length);
    });
}
duzinaStringa(nizDuzina);

// 20.zadatak 
let najveciString = (myarr) => {
    let maxString = myarr[0].length;
    for(let i = 0 ; i< myarr.length ; i++){
        if(myarr[i].length> maxString){
            maxString = myarr[i].length;
        }
    }
    return maxString;
}
console.log(najveciString(nizDuzina));

//20. sa foreach

let stringNajvecaDuzina = niz => {
    let najvecaDuzina = niz[0].length;
    let najduziString = niz[0];
    niz.forEach(elem => {
        if(elem.length > najvecaDuzina){
            najvecaDuzina = elem.length;
            najduziString = elem;
        }
    });
    return najduziString;
};
console.log(stringNajvecaDuzina(nizDuzina));


//21.zadatak  veca duzina od prosecne

let prosecnaDuzinaStringova = niz => {
    let prosek = 0;
    niz.forEach(elem =>{
        prosek += elem.length;
    });
    prosek = prosek/ niz.length;
    return prosek;
};

let brojNatprosecnoDugackih = niz =>{
    let prosek = prosecnaDuzinaStringova(niz);
    let broj = 0;
    niz.forEach(elem =>{
        if(elem.length > prosek){
            broj++;
        }
    });
    return broj;
};
console.log(brojNatprosecnoDugackih(nizDuzina));

// ispisati sve elemente sa max duzinom

let maxDuzina = niz => {
    let m = niz[0].length;
    niz.forEach(elem => {
        if(elem.length > m) {
            m = elem.length;
        }
    });
    return m;
};

let stringoviSaSvojstvom = (niz, svojstvo) => {
    let s= svojstvo(niz);
    niz.forEach(elem => {
        if(elem.length == s) {
            console.log(elem);
        }
    });
};
stringoviSaSvojstvom(nizDuzina, maxDuzina);

// ispisati sve elemente sa min duzinom 
let minDuzina = niz => {
    let m = niz[0].length;
    niz.forEach(elem => {
        if(elem.length < m) {
            m = elem.length;
        }
    });
    return m ;
};
stringoviSaSvojstvom(nizDuzina , minDuzina);

//24.zadatak 

let a1 = [5,-8,8,14];
let b1 = [9,5,-5,8];

let c = [];
for(let i = 0; i < a1.length ; i++){
    //c.push(a1[i]);
    //c.push(b1[i]);
    c[2*i] = a1[i];
    c[2*i + 1] = b1[i]; //bez ugradjene f.je
}
console.log(c);

// proba zadatak sa tabelom 

let kosarkasi = niz => {
    let result = "<table>";
    niz.forEach(elem => {
        result += `<tr><td>${elem}</td></tr>`;
    });
    result += "</table>";
    let divKosarka = document.getElementById("container");
    divKosarka.innerHTML += result;
}
let igraci =["pera","mika","zika","jablan"];
kosarkasi(igraci);