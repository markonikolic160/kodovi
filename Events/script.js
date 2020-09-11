// 1.kork dohvati element iz dom stabla
// 2.korak dodaj elementu event listener
// 3.korak napraviti funkcionalnost

//1.
let buttonClickMe = document.getElementById('clickMe');

//2.
buttonClickMe.addEventListener('click', () =>{
    //3.
    console.log("Clicked!");
});

//dupli klik

let buttonDoubleClickMe = document.getElementById('doubleClickMe');
buttonDoubleClickMe.addEventListener('dblclick' , () =>{
    console.log("Double clicked!");
});

buttonDoubleClickMe.addEventListener('mouseover', ()=>{
    console.log("mouse over");
}) ;



//brojac klikom na dugme ispisuje brojac u konzoli
//definisem dom elemente na pocetku zadatka
//1. i 2. zadatak sa slajdova
let buttonCounter = document.querySelector("#counter");
let pPrintCounter = document.querySelector("#printCounter");
let counter = 1;
buttonCounter.addEventListener('click' , ()=>{
    console.log(counter);
    pPrintCounter.innerHTML = counter; 
    counter++;
});

//3. zadatak dva dugmeta za + i -
//dom elementi
let buttonMinus = document.getElementById("minus");
let buttonPlus = document.getElementById("plus");
let spanResult = document.getElementById("result");

let res = 0 ;
spanResult.innerHTML = res;
buttonMinus.addEventListener("click", ()=>{
    res--;
    if(res<=0){
        res = 0 ;
    } 
    // 2. nacin
    //if(res > 0) {
    //  res--;              
   // }
    spanResult.innerHTML = res;
});

buttonPlus.addEventListener("click", ()=>{
    res++;
    spanResult.innerHTML = res;
});

// input polje i dugme
// prvo dom
let inputName = document.getElementById("name");
let buttonSubmitName = document.getElementById("submitName");
let pPrintName = document.getElementById("printName");

buttonSubmitName.addEventListener("click" ,() => {
    let name = inputName.value;
    pPrintName.innerHTML = "Hello " + name;
    inputName.value = ""; //isprazni input polje
});

//7. napraviti formu i racunaj

//prvi nacin
//DOM
let inputNum1 = document.getElementById("num1");
let buttonKvadriraj = document.getElementById("kvadriraj");
let pRes = document.getElementById("res");
/*
buttonKvadriraj.addEventListener('click', event => {
    event.preventDefault();//da ne refresuje stranicu
    let num1 = inputNum1.value;
    let res = num1**2;
    //console.log(res);
    pRes.innerHTML = res;
});
*/

// drugi nacin
let form = document.querySelector("form");
form.addEventListener('submit',event =>{
    event.preventDefault();
    let res = inputNum1.value ** 2;
    pRes.innerHTML = res;
});
/////////////////////////////////////////
//drugi deo - prepolovi
 let inputNum2 = document.getElementById("num2");
 let buttonPrepolovi = document.getElementById("prepolovi");
 let pRes2 = document.getElementById("res2");
 buttonPrepolovi.addEventListener('click', event =>{
    event.preventDefault();
    let num2 = inputNum2.value;
    let res = num2/2;
    pRes2.innerHTML = res;
 });

 /////////////////////////////////////
 //treci deo povrsina kruga
 let inputNum3 = document.getElementById("num3");
 let buttonPovrsina = document.getElementById("povrsina");
 let pRes3 = document.getElementById("res3");
 buttonPovrsina.addEventListener('click',event =>{
    event.preventDefault();
    let num3 = inputNum3.value;
    let res = num3**2 * 3.14 ;
    pRes3.innerHTML =res;
 });

