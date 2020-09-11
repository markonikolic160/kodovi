console.log("kalkuator");
// DOM
let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
//let radios = document.querySelectorAll("input[name='op']");

let form = document.querySelector("form");
let pRes = document.getElementById("res");

let racunaj = (num1,num2,operacija) => {
    // konverzija u numericku vrednost
    num1 = Number(num1);
    num2 = Number(num2);
    //Number.isInteger() proverava da li je ceo broj
    //Number.isFinite() proverava da li je ceo ili decimalan broj
    if(Number.isFinite(num1) && Number.isFinite(num2)){
        //racunaj
        
         let res = 0 ;
         if(operacija == "+"){
             res = num1 +num2;
         } else if(operacija == "-"){
             res = num1 -num2;
         } else if(operacija == "*"){
             res = num1*num2;
         } else {
             if(num2 == 0){
                 alert("ne deli se nulom");
                 res = "?";
             } else{
             res = num1/num2;
             }
         }
         pRes.innerHTML = `${num1} ${operacija} ${num2} = ${res}`;
 
     } else {
         alert ("Unosi moraju biti numericke vrednosti");
     }
}


form.addEventListener("submit", event =>{
    event.preventDefault();
    //preuzimanje iz inputa
    let num1 = inputNum1.value;
    let num2 = inputNum2.value;
    
    let radiosChecked = document.querySelector("input[name='op']:checked");
    let radiosCheckedValue = radiosChecked.value;
    racunaj(num1,num2,radiosCheckedValue);
   
});


////////////////////
// forma za prijavu




