// 1 .zadatak

let n = 7 ; 
let m = 21 ;
let i = 0 ;
let suma = 0 ;
let brojBrojeva = 0 ;
for(i=n; i <= m ; i ++ ){
    if(i%7 == 0 && i%2 !=0){
        suma += i;
        brojBrojeva++;
    }
}
console.log("Suma brojva je : " + suma);
console.log("Broj brojeva ja : " + brojBrojeva);
console.log("Proizvod sume i broja brojeva je " + suma*brojBrojeva);

// 2.zadatak

function indeksTelesnemase(tezina,visina){
    let bmi =tezina/(visina/100)**2;
    bmi = bmi.toFixed(1)
    return bmi;
}

let index = indeksTelesnemase(100,182);
console.log(index);
if(index<=18.5){
    console.log("Osoba je pothranjena");
} else if(index > 18.5 && index < 24.9){
    console.log("Osoba je normalne tezine");
} else if (index>= 24.9 && index <=30){
    console.log("Osoba ima povisenu tezinu");
} else{
    console.log("Osoba je gojazna");
} 

// 3. zadatak

function racunanje(br1,br2,operacija){
    if(operacija == "+"){
        return br1+br2;
    }else if(operacija == "-"){
        return br1-br2 ;
    }else if (operacija == "*"){
        return br1*br2;
    } else if(operacija == "/"){
        return br1/br2;
    }
}
console.log(racunanje(25,5,"+"));

// 4. zadatak 

function razlika(n , m ){
    let sumaParnih = 0 ;
    let brojZadnjaTri = 0;
    for(i=n ; i<=m ; i++){
        if(i%2 == 0 && i%3 == 0){
            sumaParnih += i;
        } if(i%10 == 3){
            brojZadnjaTri++;
        }
    }
    return sumaParnih - brojZadnjaTri;
}
console.log(razlika(10,20));