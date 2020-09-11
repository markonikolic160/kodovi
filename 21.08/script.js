let divResult = document.getElementById('result');
let divSat = document.getElementById('sat');


let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
/*
btn1.addEventListener('click', ()=>{
    setTimeout(()=>{
        console.log("Zdravo 1!");
    } , 1000 * 2 );
    setTimeout(()=>{
        console.log("Zdravo 2");
    },1000/2);
});
//asinhroni javascript:pozivaju se dva sata koji nezavisno otkucavaju
// svaki po zavrsetku vremena poziva callback funkciju
*/
let timer = null;

btn1.addEventListener('click', ()=>{
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null){
    timer = setTimeout(()=>{
        divResult.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

btn2.addEventListener('click',()=>{
    clearTimeout(timer);
    timer = null ;
});

let clock = setInterval(() => {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    divResult.innerHTML = (`trenutni broj sekundi je : ${sekunde}`);
}, 1000);

btn3.addEventListener('click',()=>{
    clearInterval(clock);
});

let digitalniSat = setInterval(() => {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(sati<10){
        sati = "0" + sati;
    } if(minuti<10){
        minuti = "0"+ minuti;
    } if (sekunde<10){
        sekunde= "0"+sekunde;
    }
    divSat.innerHTML = (`Trenutno vreme je: ${sati}:${minuti}:${sekunde}`);
    if(sekunde%2 == 0){
        divSat.style.color = "red";
    } else {
        divSat.style.color = "blue";
    }
}, 1000);

// counter
let btnStart = document.getElementById("startCount");
let btnStop = document.getElementById("stopCount");
let inputCount = document.getElementById("brojac");
let btnReset = document.getElementById("reset")
let brojac = null;


btnStart.addEventListener('click',()=>{
    let counter =1;
    if(brojac === null){
    brojac= setInterval(() => {
    inputCount.value = counter;
    counter++;
  }, 1000);
  }
});

btnStop.addEventListener('click',()=>{
    clearInterval(brojac);
});
