let cars = ["Volvo", "BMV", "Peugeot"]; // niz od 3 elementa
console.log(cars);
console.log(cars[0]); // pristupanje prvom elementu niza
console.log(cars[1]);
console.log(cars[2]);

console.log(cars[3]); // ne postoji pa vraca undefined

//cars[2] = "Opel";
cars[2] = true;
cars[1] = -78.994;
cars[3] = "Fiat";
console.log(cars);

cars = ["Opel","Peugeot","Audi","Citroen"];
for(let i = 0; i < cars.length ; i++){
    console.log(cars[i]);
}

// Drugacije zapisano
for(let i = 0; i<= cars.length - 1 ; i++){
    console.log(cars[i]);
}

//2.zadatak zbir elemenata celobrojnog niza

let niz = [9,15,3,-4,-10,20,1];

/*let suma = 0 ;
for( let i = 0 ; i < niz.length ; i++){
    suma += niz[i];
}
console.log(suma);
*/

let suma = myarray => {
    let suma = 0 ;
    for( let i = 0 ; i < myarray.length ; i++){
        suma += myarray[i];
    }
    return suma;
}
console.log(suma(niz));

//3.zadatak 

let proizvod = myarray1 => {
    let suma = 1;
    for( let i = 0 ; i < myarray1.length ; i++){
        suma *= myarray1[i];
    }
    return suma;
}
console.log(proizvod(niz));

//4.zadatak 

let srednjaVred = myarray2 => {
    let suma = 0;
    let brojac = 0;
    for( let i = 0 ; i < myarray2.length ; i++){
        suma += myarray2[i];
        brojac++;
    }
    return suma/brojac;
}
console.log(srednjaVred(niz));

//5.zadatak 
/*
let maxVred = myarray3 => {
    myarray3.sort(function(a,b){return b-a});
    return myarray3[0];
}
console.log(maxVred(niz));

//6.zadatak 

let minVred = myarray4 => {
    myarray4.sort(function(a,b){return a-b});
    return myarray4[0];
}
console.log(minVred(niz));
*/
// 4. zadatak na casu srednja vrednost elemenata niza

let avg = myarr => {
    let s = suma(myarr);
    let arsr = s / myarr.length;
    return arsr;
}
console.log("Aritmeticka sredina je :" + avg(niz));

// 5. na casu zadatak maksimalni element u nizu
let max = myarr => {
    let maks = myarr[0];
    for(let i = 0 ; i<myarr.length; i ++){
        if(maks < myarr[i]){
            maks = myarr[i];
        }
    }
    return maks;
}
console.log("Najveci element niza je: " + max(niz));

//6.zadatak 
let min = myarr => {
    let mini = myarr[0];
    for(let i = 0 ; i<myarr.length; i ++){
        if(mini > myarr[i]){
            mini = myarr[i];
        }
    }
    return mini;
}
console.log("Najmanji element niza je: " + min(niz));

//7.zadatak
/*
let max = myarr => {
    let maks = myarr[0];
    for(let i = 0 ; i<myarr.length; i ++){
        if(maks < myarr[i]){
            maks = myarr[i];
        }
    }
    let index = myarr.indexOf(maks,0);
    return index;
}
console.log(max(niz));
*/

//7.zadatak bez ugradjene f.je
/*let max = myarr => {
    let index = 0 ;
    let maks = myarr[0];
    for(let i = 0 ; i<myarr.length; i ++){
        if(maks < myarr[i]){
            maks = myarr[i];
            index = [i];
        }
    }
   
    return index;
}
console.log(max(niz));
*/

// 7 . zadatak

let maxInd = myarr => {
    let maks = myarr[0];
    let maksInd = 0 ;

    for(let i = 0 ; i<myarr.length; i++){
        if(myarr[i] > maks){
            maks = myarr[i];
            maksInd = i ;
        }
    }
    return maksInd;
}
console.log("Index najveceg elementa je : " + maxInd(niz));

// 7. zadatak drugi nacin
let maxInd2 = myarr => {
    let maks = max(myarr);
    for(let i=0 ; i < myarr.length; i++){
        if(myarr[i] == maks){
            return i;
        }
    }
}
console.log(maxInd2(niz));

// 9.zadatak  broj elem. vecih od srednje vrednosti

let brojElemAvrg = myarr => {
    let sredina = avg(myarr);
    let brojacAvg = 0;
    for(let i =0 ; i < myarr.length ; i++){
        if(myarr[i] > sredina){
            brojacAvg ++;
        }
    }
    return brojacAvg;
}
console.log(brojElemAvrg(niz));

// 10.zadatak zbir pozitivnih elemenata 

let zbirPoz = myarr => {
    let sumaPozi = 0 ;
    for(let i = 0 ; i < myarr.length ; i++){
        if(myarr[i] > 0 ){
            sumaPozi += myarr[i];
        }
    }
    return sumaPozi;
}
console.log(zbirPoz(niz));

// 12. zadatak element paran ali neparan index
// if(arr[i]%2 == 0 && i%2 !=0)

let brParIndxNepar = myarr => {
    let brojac12 = 0 ;
    for(let i = 0 ; i< myarr.length ; i++){
        if(myarr[i]%2 == 0 && i%2 !=0){
            brojac12++
        }
    }
    return brojac12;
}
console.log("Broj elemenata je : " + brParIndxNepar(niz));

//13.zadatak 
let sumaparIndex = myarr => {
    let suma = 0;
    for(let i = 0 ; i < myarr.length ; i++){
        if(i%2 == 0){
            suma += myarr[i];
        }
    }
    return suma ;
}
console.log("Suma elem. sa parnim indexom je: " + sumaparIndex(niz));

//14.zadatak promena znaka svakog elementa

let promenaZnaka = myarr => {
    for(let i = 0 ; i < myarr.length ; i++){
            myarr[i] = myarr[i] * -1;
    }
    return myarr;
}
console.log(promenaZnaka(niz));

//15.zadatak neparni element sa parnim indexom promena znaka

let promenaZnaka2 = myarr => {
    for(let i = 0; i<myarr.length ; i++){
        if(myarr[i]%2 !=0  && i%2 == 0){
            myarr[i] = myarr[i] * -1;
        }
    }
    return myarr;
}
console.log(promenaZnaka2(niz));

//16.zadatak

let nizStr = ["Banane","Breskve","Sljive","Kajsije","Maline"]

let myList = document.getElementById("lista");
for(let i = 0 ; i < nizStr.length ; i++){
    myList.innerHTML += `<li> ${nizStr[i]} </li>`;
}

// 17. zadatak
let kosarka = ["KK.Pirot","Crvena zvezda","Partizan","FMP","Mega","Denver","Sacramento","Dalas"];
let myTable = document.getElementById("kosarka");
for(let i = 0 ; i < kosarka.length ; i++){
    myTable.innerHTML += `<td> ${kosarka[i]}</td>`;
}

//19.zadatak 
let nizDuzina = ["Automobil","Lopta","Kuca","Jabuka","Televizija"];
for( let i = 0 ; i<nizDuzina.length ; i ++){
    console.log(nizDuzina[i].length);
    
}


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